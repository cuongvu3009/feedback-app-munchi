import nodemailer from "nodemailer";

class EmailService {
  static async sendEmail(subject: string, text: string) {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true, //ssl
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "webdev3009@gmail.com", // Email where you want to receive notifications
      subject: subject,
      text: text,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
}

export default EmailService;
