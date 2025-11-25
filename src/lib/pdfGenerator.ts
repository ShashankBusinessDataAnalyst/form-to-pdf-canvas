import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (
  elementId: string,
  fileName: string,
  setPrintMode?: (value: boolean) => void,
  currentScale?: number
): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error("Element not found");
  }

  try {
    // Enable print mode if callback provided
    if (setPrintMode) {
      setPrintMode(true);
      // Wait for React to re-render with print mode components
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Temporarily remove scale transform for full-resolution PDF
    const originalTransform = (element as HTMLElement).style.transform;
    if (currentScale) {
      (element as HTMLElement).style.transform = 'scale(1)';
      (element as HTMLElement).style.transformOrigin = 'top left';
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Hide grid overlay during capture
    const gridOverlay = element.querySelector('[data-html2canvas-ignore="true"]');
    if (gridOverlay) {
      (gridOverlay as HTMLElement).style.display = 'none';
    }

    // Get exact dimensions
    const rect = element.getBoundingClientRect();

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      width: rect.width,
      height: rect.height,
      windowWidth: rect.width,
      windowHeight: rect.height,
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      allowTaint: false,
      foreignObjectRendering: false,
    });

    // Restore grid overlay
    if (gridOverlay) {
      (gridOverlay as HTMLElement).style.display = '';
    }

    // Restore original scale transform
    if (currentScale) {
      (element as HTMLElement).style.transform = originalTransform;
    }

    // Disable print mode
    if (setPrintMode) {
      setPrintMode(false);
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
    // Restore scale and print mode on error
    const element = document.getElementById(elementId);
    if (element && currentScale) {
      (element as HTMLElement).style.transform = `scale(${currentScale})`;
    }
    if (setPrintMode) {
      setPrintMode(false);
    }
    throw new Error("Failed to generate PDF");
  }
};
