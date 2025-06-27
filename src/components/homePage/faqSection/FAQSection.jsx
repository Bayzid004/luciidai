'use client'
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What type of data do we annotate?",
            answer:
                "We offer data annotation services for SFT and RLFH to assist in LLM training.",
        },
        {
            question: "How much does our service cost?",
            answer: "We offer two payment options: a complete project contract or an hourly rate. Our expert team determines the cost of our service, analyzing project complexity and discussing with the client how to fix the rate.",
        },
        {
            question:
                "How do you ensure the security and privacy of the data I provide?",
            answer: "We ensure secure data storage by encrypting your data both in transit and at rest. Access controls are strictly enforced, allowing only authorized personnel to access your data. Additionally, we maintain stringent non-disclosure agreements (NDAs) with all our employees and contractors. For further information on our security practices, please feel free to reach out to us.",
        },
    ];

    return (
        <div className="w-full bg-[#F4F7FB] py-12 px-4 md:px-10">
            <div className="text-center">
                <h3 className="text-pink-500 font-bold text-lg mb-2">FAQ</h3>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <div>
                    <p className="text-black text-xl font-semibold mb-8">
                        Most frequently answers <br /> and Questions
                    </p>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-md p-4 bg-white"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <p className="font-medium">
                                        {index === 0 ? "Q1. " : ""}
                                        {item.question}
                                    </p>
                                    {openIndex === index ? (
                                        <Eye className="text-black w-5 h-5" />
                                    ) : (
                                        <EyeOff className="text-black w-5 h-5" />
                                    )}
                                </div>
                                {openIndex === index && item.answer && (
                                    <p className="text-gray-600 mt-2">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Illustration */}
                <div className="flex justify-center">
                    <Image
                        src="/img/faq.png"
                        alt="Illustration"
                        width={450}
                        height={450}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
