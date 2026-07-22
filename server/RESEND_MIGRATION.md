# Nodemailer → Resend Migration Guide

## Overview
This document explains the migration from Nodemailer (Gmail SMTP) to Resend for email delivery in the HIT UNIT backend.

---

## Why Resend?

### Problem with Nodemailer + Gmail SMTP on Railway
- **ETIMEDOUT errors**: Gmail SMTP connections timeout on Railway due to:
  - Network restrictions on Railway's infrastructure
  - Gmail's strict SMTP security requirements
  - Session-based authentication conflicts with containerized environments
  - Railway's firewall blocking SMTP port 587 in some regions

### Why Resend is Better
✅ **Designed for serverless/container environments**
✅ **REST API (no SMTP connection issues)**
✅ **Reliable email delivery with good deliverability**
✅ **Works perfectly on Railway, Vercel, and other cloud platforms**
✅ **Simple setup with just an API key**
✅ **Email tracking and analytics built-in**
✅ **Free tier: 100 emails/day**

---

## What Changed

### Removed ❌
```javascript
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: `"HIT UNIT Website" <${process.env.EMAIL_USER}>`,
  to: process.env.TO_EMAIL,
  // ...
});
```

**Environment Variables Removed:**
- `EMAIL_USER` (Gmail address)
- `EMAIL_PASS` (Gmail app password)

**Package Removed:**
- `nodemailer` from package.json

---

### Added ✅
```javascript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: "HIT UNIT <onboarding@resend.dev>",
  to: process.env.TO_EMAIL,
  replyTo: email,
  subject: `New Enquiry from ${name}`,
  html,
});
```

**Environment Variables Added:**
- `RESEND_API_KEY` (from resend.com)
- `TO_EMAIL` (recipient email address)

**Package Added:**
- `resend@^3.0.0` to package.json

---

## Environment Variables

### Before (Nodemailer)
```env
PORT=3001
EMAIL_USER=foodsaver.ssgkj@gmail.com
EMAIL_PASS=vjnqkeaizwpdfupp
```

### After (Resend)
```env
PORT=3001
RESEND_API_KEY=re_xxxxxxxxxxxxx
TO_EMAIL=gokulbharath1221@gmail.com
```

---

## Setup Instructions

### 1. Get Resend API Key
1. Go to https://resend.com
2. Sign up (free account)
3. Navigate to API Keys section
4. Copy your API key (starts with `re_`)

### 2. Railway Deployment
1. In Railway dashboard, open your Backend service
2. Go to **Variables** tab
3. Add environment variables:
   - `RESEND_API_KEY=re_xxxxxxxxxxxxx`
   - `TO_EMAIL=your-email@example.com`
4. Deploy (Railway will redeploy automatically)

### 3. Local Development
1. Copy `.env.example` to `.env`
2. Add your Resend API key:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   TO_EMAIL=your-email@example.com
   ```
3. Run `npm install` (to install resend package)
4. Start server: `npm run dev`

---

## API Endpoints

All endpoints remain the same. No frontend changes required.

### Health Check
```bash
GET /
GET /api/health
```

### Contact Form
```bash
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Inc",
  "project_type": "Web Development",
  "budget": "₹50,000+",
  "message": "I want to build a website..."
}
```

### Response (Success)
```json
{
  "success": true,
  "message": "Enquiry sent successfully. We'll get back to you within 24 hours."
}
```

### Response (Error)
```json
{
  "success": false,
  "message": "Name, Email and Message are required."
}
```

---

## Error Handling

### Improved Error Handling
✅ **Backend error messages sent to frontend**
✅ **Resend API errors logged with full details**
✅ **Email validation before sending**
✅ **Graceful error responses**

### Logging
Development mode logs:
```
[Email Sent] {
  messageId: "e_xxxxxxxxxxxxx",
  to: "recipient@example.com",
  from: "sender@example.com",
  subject: "New Enquiry from John"
}

[Contact API Error] {error details}
[Resend Error] {error details}
```

---

## CORS Configuration

CORS remains the same. Allowed origins:
- `http://localhost:5173` (local Vite frontend)
- `http://localhost:3000` (local dev)
- `https://hit-unit.vercel.app` (production frontend)
- `https://hit-unit-4zywplyrr-gokul-bharaths-projects.vercel.app` (preview)

**To add more origins**, edit `allowedOrigins` array in `server/index.js`:
```javascript
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-new-domain.com", // Add here
];
```

---

## Validation

### Frontend Validation (Contact.tsx)
- ✅ Name required
- ✅ Email required
- ✅ Message required
- ✅ Double slash in API URL removed (`.replace(/\/+$/, '')`)

### Backend Validation (index.js)
- ✅ Name, Email, Message required
- ✅ Email format validation (regex check)
- ✅ Proper HTTP status codes (400 for validation, 500 for errors)

---

## Email Template

The email now includes:
- Sender details (name, email, phone, company)
- Project information (type, budget)
- Message content
- Professional HTML formatting
- Reply-to address set to sender's email

---

## Testing

### Local Testing
```bash
# Terminal 1: Start backend
cd server
npm install
npm run dev

# Terminal 2: Test with curl
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### Production Testing
1. Deploy to Railway
2. Submit form on https://hit-unit.vercel.app
3. Check email in your inbox (TO_EMAIL)
4. Verify no ETIMEDOUT errors in Railway logs

---

## Troubleshooting

### "RESEND_API_KEY is required"
- ✅ Add `RESEND_API_KEY` to Railway environment variables
- ✅ Restart deployment after adding the variable

### "Invalid from address"
- ✅ Use provided Resend sender: `HIT UNIT <onboarding@resend.dev>`
- ✅ To use custom domain, configure in Resend dashboard

### Emails not received
- ✅ Check spam folder
- ✅ Verify `TO_EMAIL` is correct
- ✅ Check Railway logs for errors
- ✅ Verify sender domain is verified in Resend

### 404 on unknown routes
- ✅ Added 404 handler that returns proper error response

---

## Files Changed

| File | Change |
|------|--------|
| `server/index.js` | Replaced Nodemailer with Resend |
| `server/package.json` | Removed nodemailer, added resend |
| `server/.env` | Removed EMAIL_USER/EMAIL_PASS, added RESEND_API_KEY/TO_EMAIL |
| `server/.env.example` | New file with Resend configuration template |

---

## Migration Checklist

- [x] Remove Nodemailer dependency
- [x] Remove Gmail SMTP configuration
- [x] Install Resend package
- [x] Add Resend API client
- [x] Rewrite email sending logic
- [x] Add email validation
- [x] Improve error handling
- [x] Update environment variables
- [x] Create .env.example
- [x] Keep CORS configuration
- [x] Keep health check routes
- [x] Keep form validation
- [x] Test with Resend API

---

## Production Deployment Steps

1. **Update Railway Environment Variables:**
   - Remove: `EMAIL_USER`, `EMAIL_PASS`
   - Add: `RESEND_API_KEY`, `TO_EMAIL`

2. **Deploy Code:**
   - Push changes to GitHub
   - Railway auto-deploys

3. **Verify Deployment:**
   - Check Railway logs for "Email service: Resend"
   - Test contact form on production

4. **Monitor:**
   - Check Railway logs for any errors
   - Test email delivery

---

## Support

- Resend Docs: https://resend.com/docs
- Railway Docs: https://docs.railway.app
- GitHub Issues: Report any problems

---

## Version History

- **v1.0.0** (2024): Migrated from Nodemailer to Resend
  - Fixed ETIMEDOUT errors on Railway
  - Simplified email delivery
  - Improved reliability and logging
