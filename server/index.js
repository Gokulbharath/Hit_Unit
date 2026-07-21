import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ============================================================
// STEP 1: Initialize dotenv BEFORE accessing process.env
// ============================================================
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log('[STARTUP] Current working directory:', process.cwd());
console.log('[STARTUP] Server file directory:', __dirname);

// Load .env file from the server directory
dotenv.config({ path: `${__dirname}/.env` });
console.log('[STARTUP] dotenv initialized - loading .env from:', `${__dirname}/.env`);

// ============================================================
// STEP 2: Verify environment variables are loaded
// ============================================================
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const PORT = process.env.PORT || 3001;
const TO_EMAIL = process.env.TO_EMAIL || 'gokulbharath1221@gmail.com';

console.log('\n[ENV CHECK] ========================================');
console.log('[ENV CHECK] EMAIL_USER exists:', !!EMAIL_USER);
if (EMAIL_USER) {
  console.log('[ENV CHECK] EMAIL_USER value:', EMAIL_USER);
}
console.log('[ENV CHECK] EMAIL_PASS exists:', !!EMAIL_PASS);
if (EMAIL_PASS) {
  const masked = EMAIL_PASS.substring(0, 2) + '*'.repeat(Math.max(0, EMAIL_PASS.length - 2));
  console.log('[ENV CHECK] EMAIL_PASS value (masked):', masked);
}
console.log('[ENV CHECK] TO_EMAIL:', TO_EMAIL);
console.log('[ENV CHECK] PORT:', PORT);
console.log('[ENV CHECK] ========================================\n');

// ============================================================
// STEP 3: Validate credentials before creating transporter
// ============================================================
if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('[CRITICAL] Missing email credentials!');
  console.error('[CRITICAL] EMAIL_USER:', EMAIL_USER ? 'LOADED' : 'MISSING');
  console.error('[CRITICAL] EMAIL_PASS:', EMAIL_PASS ? 'LOADED' : 'MISSING');
  process.exit(1);
}

// ============================================================
// STEP 4: Create Express app and middleware
// ============================================================
const app = express();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));
console.log('[MIDDLEWARE] CORS enabled for localhost:5173 and localhost:3000');

// JSON middleware
app.use(express.json());
console.log('[MIDDLEWARE] Express JSON parser enabled');

// ============================================================
// STEP 5: Create Nodemailer transporter with error handling
// ============================================================
let transporter;
try {
  console.log('[TRANSPORTER] Creating Nodemailer transporter...');
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });
  console.log('[TRANSPORTER] Transporter created successfully');
  
  // Verify transporter connection
  console.log('[TRANSPORTER] Verifying transporter connection...');
  await transporter.verify();
  console.log('[TRANSPORTER] ✓ Transporter verified successfully');
} catch (err) {
  console.error('[TRANSPORTER] ✗ Transporter creation/verification failed:', err.message);
  console.error('[TRANSPORTER] Full error:', err);
  process.exit(1);
}

// ============================================================
// STEP 6: Health check endpoint
// ============================================================
app.get('/api/health', (req, res) => {
  console.log('[HEALTH] Health check requested');
  res.status(200).json({ status: 'OK', service: 'HIT UNIT backend' });
});

// ============================================================
// STEP 7: Contact form endpoint
// ============================================================
app.post('/api/contact', async (req, res) => {
  console.log('\n[CONTACT] ====== POST /api/contact ======');
  console.log('[CONTACT] Request received from:', req.ip);
  console.log('[CONTACT] Request body:', JSON.stringify(req.body, null, 2));

  try {
    const { name, email, phone, company, project_type, budget, message } = req.body;

    // Validation
    console.log('[CONTACT] Validating required fields...');
    if (!name || !email || !message) {
      console.log('[CONTACT] ✗ Validation failed: Missing required fields');
      return res.status(400).json({ message: 'Name, email and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('[CONTACT] ✗ Email validation failed:', email);
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }
    console.log('[CONTACT] ✓ All validations passed');

    // Prepare email content
    console.log('[CONTACT] Preparing email content...');
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

    // Send email
    console.log('[CONTACT] Sending email via Nodemailer...');
    console.log('[CONTACT] From:', EMAIL_USER);
    console.log('[CONTACT] To:', TO_EMAIL);
    console.log('[CONTACT] Reply-To:', email);

    const info = await transporter.sendMail({
      from: `"HIT UNIT Website" <${EMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry — ${name}`,
      text: mailText,
      html: mailHtml,
    });

    console.log('[CONTACT] ✓ Email sent successfully');
    console.log('[CONTACT] Message ID:', info.messageId);
    console.log('[CONTACT] Response:', info.response);

    res.status(200).json({ message: 'Enquiry sent successfully.' });
  } catch (err) {
    console.error('[CONTACT] ✗ Error occurred:', err.message);
    console.error('[CONTACT] Error code:', err.code);
    console.error('[CONTACT] Full error:', err);

    // Provide specific error messages for common issues
    let userMessage = 'Failed to send enquiry. Please try again later.';
    if (err.code === 'EAUTH') {
      userMessage = 'Authentication failed. Please check email credentials.';
      console.error('[CONTACT] EAUTH - Check if App Password is used (not regular password)');
      console.error('[CONTACT] Check if 2FA is enabled on Gmail account');
    }

    res.status(500).json({ message: userMessage });
  }
});

// ============================================================
// STEP 8: Start server
// ============================================================
app.listen(PORT, () => {
  console.log('\n[SERVER] ====== HIT UNIT Backend Started ======');
  console.log(`[SERVER] ✓ Running on http://localhost:${PORT}`);
  console.log('[SERVER] Health check: http://localhost:' + PORT + '/api/health');
  console.log('[SERVER] Contact endpoint: POST http://localhost:' + PORT + '/api/contact');
  console.log('[SERVER] ==========================================\n');
});
