import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const generatePDF = async (
  elementId: string,
  fileName: string,
  setPrintMode?: (value: boolean) => void
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

    // Reset transform for consistent capture
    const htmlElement = element as HTMLElement;
    const originalTransform = htmlElement.style.transform;
    const originalTransformOrigin = htmlElement.style.transformOrigin;
    
    htmlElement.style.transform = 'translate(0px, 0px) scale(1)';
    htmlElement.style.transformOrigin = 'top left';
    await new Promise(resolve => setTimeout(resolve, 100));

    // Use fixed container dimensions for consistent capture
    const CONTAINER_WIDTH = 1123;
    const CONTAINER_HEIGHT = 794;

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      width: CONTAINER_WIDTH,
      height: CONTAINER_HEIGHT,
      windowWidth: CONTAINER_WIDTH,
      windowHeight: CONTAINER_HEIGHT,
      scrollX: 0,
      scrollY: 0,
      x: 0,
      y: 0,
      allowTaint: false,
      foreignObjectRendering: false,
    });

    // Restore original transform and origin
    htmlElement.style.transform = originalTransform;
    htmlElement.style.transformOrigin = originalTransformOrigin;

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
    // Restore print mode on error
    if (setPrintMode) {
      setPrintMode(false);
    }
    throw new Error("Failed to generate PDF");
  }
};
