export const mailSendHandler = async ({
  data,
  reset,
  setIsLoading,
  toast,
  onClose,
  from,
}) => {

  const apiUrl =
      process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_URL
        : "http://localhost:3000";
    const url = `${apiUrl}/api/send-email`;

  if (from == "hire talent") {
    const emailTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p><strong>Name:</strong> ${data?.name}</p>
      <p><strong>Phone:</strong> ${data?.phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${data?.email}">${data?.email}</a></p>
      <p><strong>Company:</strong> ${data?.company}</p>
      <p><strong>Project Description:</strong> ${data?.projectDescription}</p>
      <p><strong>Budget:</strong> ${data?.budget}</p>
      <p><strong>ProjectSize:</strong> ${data?.projectSize}</p>
      <p><strong>Selected Service:</strong> ${data?.selectedService}</p>
      <p><strong>Special Requirements:</strong> ${data?.specialRequirements}</p>
      <p><strong>Timeline:</strong> ${data?.timeline}</p>
      <p><strong>Languages:</strong> ${data?.languages}</p>
      <p><strong>DataType:</strong> ${data?.dataType}</p>
    </div>
  `;
    const payload = {
      projectFor:
        process.env.NODE_ENV === "production"
          ? "bayzidweb04@gmail.com"
          : "bayzidweb04@gmail.com",
      brand: "Luciid Ai",
      name: data?.name,
      email: data?.email,
      message: emailTemplate,
    };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://ainovaq.vercel.app/",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) {
        toast.error("Failed to send! Please try again.");
        return;
      }

      toast.success("Successfully sent!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send! Please try again.");
    }
  } else {
    const emailTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <p><strong>Name:</strong> ${data?.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data?.email}">${data?.email}</a></p>
      <p><strong>Subject:</strong> ${data?.subject}</p>
      <p><strong>Phone:</strong> ${data?.phone}</p>
      <p><strong>Message:</strong> ${data?.message}</p>
    </div>
  `;

    const payload = {
      projectFor:
        process.env.NODE_ENV === "production"
          ? "bayzidweb04@gmail.com"
          : "bayzidweb04@gmail.com",
      brand: "Luciid Ai",
      name: data?.name,
      email: data?.email,
      message: emailTemplate,
    };
    try {
      setIsLoading(true);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://ainovaq.vercel.app/",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) {
        toast.error("Failed to send! Please try again.");
        return;
      }

      toast.success("Successfully sent!");
      reset();
      if (onClose && typeof onClose === "function") {
        onClose();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send! Please try again.");
    } finally {
      setIsLoading(false);
    }
  }
};
