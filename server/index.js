import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TO_EMAIL = process.env.TO_EMAIL || 'gokulbharath1221@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, project_type, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address.' });
  }

  const mailText = [
    'New enquiry from HIT UNIT website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Company: ${company || 'Not provided'}`,
    `Project Type: ${project_type || 'Not provided'}`,
    `Budget: ${budget || 'Not provided'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const mailHtml = `
    <h2>New enquiry from HIT UNIT website</h2>
    <table style="border-collapse:collapse;font-family:Inter,Arial,sans-serif;font-size:14px;">
      <tr><td style="padding:6px 12px;color:#6B7280;">Name</td><td style="padding:6px 12px;font-weight:600;">${name}</td></tr>
      <tr><td style="padding:6px 12px;color:#6B7280;">Email</td><td style="padding:6px 12px;font-weight:600;">${email}</td></tr>
      <tr><td style="padding:6px 12px;color:#6B7280;">Phone</td><td style="padding:6px 12px;">${phone || 'Not provided'}</td></tr>
      <tr><td style="padding:6px 12px;color:#6B7280;">Company</td><td style="padding:6px 12px;">${company || 'Not provided'}</td></tr>
      <tr><td style="padding:6px 12px;color:#6B7280;">Project Type</td><td style="padding:6px 12px;">${project_type || 'Not provided'}</td></tr>
      <tr><td style="padding:6px 12px;color:#6B7280;">Budget</td><td style="padding:6px 12px;">${budget || 'Not provided'}</td></tr>
    </table>
    <h3 style="font-family:Inter,Arial,sans-serif;">Message</h3>
    <p style="font-family:Inter,Arial,sans-serif;line-height:1.6;">${message}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"HIT UNIT Website" <${EMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry — ${name}`,
      text: mailText,
      html: mailHtml,
    });
    res.status(200).json({ message: 'Enquiry sent successfully.' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ message: 'Failed to send enquiry. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`HIT UNIT backend running on http://localhost:${PORT}`);
});
