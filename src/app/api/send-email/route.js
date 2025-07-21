import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req) {
  try {
    const { projectFor, brand, name, email, message } =
      await req.json();

    // await userMessage.save();

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER ,
        pass: process.env.EMAIL_PASS,
      },
    });

    const fromAddress = `${brand} <${process.env.EMAIL_USER}>`;

    await transporter.sendMail({
      from: fromAddress,
      to: projectFor,
      subject: `New message from ${brand}`,
      // text: Name: ${name}\nEmail: ${email}, // Optional plain text fallback
      html: message,
    });
    const response = {
    data:null,
    statusCode:200,
    message:"Succesfully mail sent",
  };

    return NextResponse.json(response, {
    status: 200,
  });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
