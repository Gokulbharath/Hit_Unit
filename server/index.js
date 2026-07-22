import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// =========================
// CORS
// =========================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://hit-unit.vercel.app",
  "https://hit-unit-4zywplyrr-gokul-bharaths-projects.vercel.app",
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow Postman / curl / same-origin requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS Not Allowed"));
    },
    credentials: true,
  })
);

app.use(express.json());

// =========================
// Nodemailer
// =========================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// =========================
// Health Check
// =========================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "HIT UNIT Backend Running 🚀",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
  });
});

// =========================
// Contact API
// =========================
app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      project_type,
      budget,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Message are required.",
      });
    }

    const html = `
      <h2>New Enquiry - HIT UNIT</h2>

      <table cellpadding="8" cellspacing="0" border="1">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone || "-"}</td></tr>
        <tr><td><b>Company</b></td><td>${company || "-"}</td></tr>
        <tr><td><b>Project Type</b></td><td>${project_type || "-"}</td></tr>
        <tr><td><b>Budget</b></td><td>${budget || "-"}</td></tr>
      </table>

      <br>

      <h3>Message</h3>

      <p>${message}</p>
    `;

    await transporter.sendMail({
      from: `"HIT UNIT Website" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL || "gokulbharath1221@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html,
    });

    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
    });
  }
});

// =========================
// Start Server
// =========================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});