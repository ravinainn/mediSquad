import PDFDocument from "pdfkit";

export const generatePdf = async (prescription) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
      let pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    // Add content to PDF
    doc.fontSize(25).text("Prescription", 100, 80);
    doc.fontSize(15).text(`Date: ${new Date().toLocaleDateString()}`, 100, 120);
    doc.text(`Medications:`, 100, 160);
    prescription.medications.forEach((med, index) => {
      doc.text(
        `${index + 1}. ${med.name} - ${med.dosage} - ${med.frequency}`,
        120,
        180 + index * 20
      );
    });
    doc.text(`Instructions: ${prescription.instructions}`, 100, 300);

    doc.end();
  });
};
