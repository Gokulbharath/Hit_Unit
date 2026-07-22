import express from "express";
import { Resend } from "resend";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// =========================
// Resend Email Client
// =========================
const resend = new Resend(process.env.RESEND_API_KEY);

// =========================
// CORS Configuration
// =========================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://hit-unit.vercel.app",
];

// Add wildcard for Vercel preview deployments
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or Postman)
    if (!origin) return callback(null, true);

    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Allow all *.vercel.app domains for preview deployments
    if (origin.includes("vercel.app")) {
      return callback(null, true);
    }

    // Deny all other origins
    return callback(new Error("CORS not allowed"));
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());

// =========================
// Health Check Routes
// =========================
app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "HIT UNIT Backend Running 🚀",
  });
});

app.get("/api/health", (_req, res) => {
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

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Message are required.",
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("[Config Error] RESEND_API_KEY not set");
      return res.status(500).json({
        success: false,
        message: "Email service is not configured. Please try again later.",
      });
    }

    // HTML Email Template
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Enquiry - HIT UNIT</h2>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="background-color: #f5f5f5; font-weight: bold;"><b>Name</b></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="background-color: #f5f5f5; font-weight: bold;"><b>Email</b></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td style="background-color: #f5f5f5; font-weight: bold;"><b>Phone</b></td>
            <td>${phone || "-"}</td>
          </tr>
          <tr>
            <td style="background-color: #f5f5f5; font-weight: bold;"><b>Company</b></td>
            <td>${company || "-"}</td>
          </tr>
          <tr>
            <td style="background-color: #f5f5f5; font-weight: bold;"><b>Project Type</b></td>
            <td>${project_type || "-"}</td>
          </tr>
          <tr>
            <td style="background-color: #f5f5f5; font-weight: bold;"><b>Budget</b></td>
            <td>${budget || "-"}</td>
          </tr>
        </table>

        <br>

        <h3 style="color: #333;">Message</h3>
        <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">This is an automated response from HIT UNIT. Please do not reply to this email.</p>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "HIT UNIT <onboarding@resend.dev>",
      to: process.env.TO_EMAIL || "gokulbharath1221@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html,
    });

    // Handle Resend errors
    if (error) {
      console.error("[Resend Error]", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send enquiry. Please try again later.",
      });
    }

    console.log("[Email Sent Successfully]", {
      messageId: data?.id,
      to: process.env.TO_EMAIL,
      from: email,
      name: name,
      subject: `New Enquiry from ${name}`,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully. We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("[Contact API Error]", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry. Please try again later.",
    });
  }
});

// =========================
// 404 Handler
// =========================
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// =========================
// Global Error Handler
// =========================
app.use((err, _req, res, _next) => {
  console.error("[Global Error Handler]", {
    error: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString(),
  });

  res.status(500).json({
    success: false,
    message: "Internal server error. Please try again later.",
  });
});

// =========================
// Start Server
// =========================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email service: Resend`);
  console.log(`🌐 CORS enabled for verified origins`);
});