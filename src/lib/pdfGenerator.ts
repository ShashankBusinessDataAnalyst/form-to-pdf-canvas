import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (
  elementId: string,
  fileName: string
): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error("Element not found");
  }

  try {
    // Hide grid overlay during capture
    const gridOverlay = element.querySelector('[data-html2canvas-ignore="true"]');
    if (gridOverlay) {
      (gridOverlay as HTMLElement).style.display = 'none';
    }

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    // Restore grid overlay
    if (gridOverlay) {
      (gridOverlay as HTMLElement).style.display = '';
    }

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? "landscape" : "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
};
