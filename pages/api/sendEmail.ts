import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  emailAddress: string;
  userMessage: string;
}

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { emailAddress, userMessage } = req.body as EmailRequestBody;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New message from my portfolio website with email address: ${emailAddress}`,
        html: `<p>${userMessage}</p>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
