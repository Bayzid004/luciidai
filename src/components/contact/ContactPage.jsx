'use client'
import React, { useState } from 'react';
import { MapPin, Mail, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import ContactForm from './ContactForm';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p><strong>Name:</strong> ${formData?.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData?.email}">${formData?.email}</a></p>
        <p><strong>Subject:</strong> ${formData?.subject}</p>
        <p><strong>Message:</strong> ${formData?.message}</p>
      </div>
    `;

    const payload = {
      projectFor: "bayzidweb04@gmail.com",
      brand: "Luciid Ai",
      name: formData?.name,
      email: formData?.email,
      message: emailTemplate,
    };

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/send-email`;

    try {
      setIsLoading(true);

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error("Failed to send! Please try again.");
        return;
      }

      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(129,140,248,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team - we'd love to hear from you
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Email</h4>
                    <a 
                      href="mailto:business@luciidai.com"
                      className="text-blue-600 hover:text-blue-700 text-sm sm:text-base break-all transition-colors"
                    >
                      business@luciidai.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 text-sm sm:text-base">Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      133-16 131st Ave<br />
                      Jamaica, NY 11420
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm sm:text-base text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;