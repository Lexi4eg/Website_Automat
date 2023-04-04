import nodemailer from "nodemailer";

require("dotenv").config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// Create a transporter object to send emails using Gmail
const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  auth: {
    user: email, // your Gmail address
    pass: password,
  },
});

// Send an email when the form is submitted
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    // Extract the form data from the request body
    const {
      email,
      message,
      emailsender,
      firstname,
      lastname,
      company,
      phone,
      header,
    } = req.body;

    // Send the email
    await transporter.sendMail({
      from: '"Automat AG" <${emailAddress}>',
      to: "felix.prattes@gmail.com",
      subject: "New message from website",
      text: `Email: ${email}\nMessage: ${message}\nEmailsender: ${emailsender}\nFirstname: ${firstname}\nLastname: ${lastname}\nCompany: ${company}\nPhone: ${phone}\nHeader: ${header}`,
    });

    await transporter.sendMail({
      from: '"Felix Prattes Email Api" <${emailAddress}>',
      to: emailsender,
      subject: "Thank you",
      text: `Thank you for your interest in our services`,
    });

    // Send a response to the client
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email" });
  }
};
