
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import PDFDocument from "pdfkit";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Appointment backend is running." });
});

app.post("/api/appointments", async (req, res) => {
  try {
    const {
      parentName,
      childName,
      childAge,
      phone,
      email,
      date,
      time,
      reason,
      message,
    } = req.body || {};

    if (!parentName || !childAge || !phone || !reason) {
      return res.status(400).json({
        success: false,
        error: "Please fill in all required fields.",
      });
    }

    if (!/^[0-9+\s()-]{8,20}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        error: "Please enter a valid phone number.",
      });
    }

    // Generate the appointment PDF in memory.
    const pdfBuffer = await new Promise((resolve, reject) => {
      const doc = new PDFDocument({ size: "A4", margin: 50 });
      const chunks = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      doc.fontSize(20).text("One Care Children's Clinic", {
        align: "center",
      });
      doc.moveDown(0.5);
      doc.fontSize(15).text("Appointment Request", {
        align: "center",
      });
      doc.moveDown();

      const fields = [
        ["Parent / Guardian", parentName],
        ["Child's Name", childName || "Not provided"],
        ["Child's Age", childAge],
        ["Phone", phone],
        ["Email", email || "Not provided"],
        ["Preferred Date", date || "Not provided"],
        ["Preferred Time", time || "Not provided"],
        ["Reason", reason],
        ["Additional Message", message || "Not provided"],
      ];

      doc.fontSize(11);

      for (const [label, value] of fields) {
        doc.font("Helvetica-Bold").text(`${label}:`, {
          continued: true,
        });
        doc.font("Helvetica").text(` ${String(value)}`);
        doc.moveDown(0.4);
      }

      doc.moveDown();
      doc.fontSize(9).text(
        "This is an appointment request, not a confirmed appointment.",
        { align: "center" }
      );

      doc.end();
    });

    // WhatsApp sending will be connected in the next step.
    // For now, return a successful response only after PDF generation.
    console.log("Appointment PDF generated successfully.");

    return res.status(200).json({
      success: true,
      message: "Appointment request received and PDF generated.",
      pdfGenerated: true,
      pdfSize: pdfBuffer.length,
    });
  } catch (error) {
    console.error("Appointment processing failed:", error.message);

    return res.status(500).json({
      success: false,
      error: "Unable to process the appointment. Please try again.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Appointment backend running on http://localhost:${PORT}`);
});
