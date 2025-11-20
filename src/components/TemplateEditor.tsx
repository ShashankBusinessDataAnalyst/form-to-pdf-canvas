import React, { useState, useEffect } from "react";
import { generatePDF } from "@/lib/pdfGenerator";
import { toast } from "sonner";
import { usePrintMode } from "@/contexts/PrintModeContext";
import { PrintPreviewDialog } from "./PrintPreviewDialog";
import { TemplateHeader } from "./TemplateHeader";
import { TemplateFooter } from "./TemplateFooter";
import { FloatingActionPanel } from "./FloatingActionPanel";
import html2canvas from "html2canvas";
interface TemplateEditorProps {
  templateImage: string;
  templateName: string;
  children?: React.ReactNode;
  onClearAll?: () => void;
}
export const TemplateEditor: React.FC<TemplateEditorProps> = ({
  templateImage,
  templateName,
  children,
  onClearAll
}) => {
  const { setPrintMode } = usePrintMode();
  const [showGrid] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  // Calculate scale factor to fit template in viewport while maintaining aspect ratio
  useEffect(() => {
    const calculateScale = () => {
      const availableHeight = window.innerHeight - 160; // Account for header (80px) + footer (72px) + padding
      const availableWidth = window.innerWidth - 32; // Account for horizontal padding
      const containerHeight = 1000; // Fixed reference height
      const containerWidth = 1400; // Fixed reference width
      
      const scaleHeight = availableHeight / containerHeight;
      const scaleWidth = availableWidth / containerWidth;
      
      // Use the smaller scale to ensure it fits, and don't scale up beyond 1
      setScale(Math.min(scaleHeight, scaleWidth, 1));
    };
    
    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);
  const handleSave = () => {
    toast.success("Data saved successfully!");
  };
  const capturePreview = async (): Promise<string> => {
    const element = document.getElementById("captureArea");
    if (!element) {
      throw new Error("Element not found");
    }

    // Enable print mode
    setPrintMode(true);
    await new Promise(resolve => setTimeout(resolve, 200));

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
      foreignObjectRendering: false
    });

    // Restore grid overlay
    if (gridOverlay) {
      (gridOverlay as HTMLElement).style.display = '';
    }

    // Disable print mode
    setPrintMode(false);
    return canvas.toDataURL("image/png");
  };
  const handlePreview = async () => {
    try {
      setPreviewOpen(true);
      setPreviewImage(null);
      const imageData = await capturePreview();
      setPreviewImage(imageData);
    } catch (error) {
      toast.error("Failed to generate preview");
      setPreviewOpen(false);
    }
  };
  const handleDownload = async () => {
    try {
      await generatePDF("captureArea", `${templateName}-form`, setPrintMode, scale);
      toast.success("PDF downloaded successfully!");
      setPreviewOpen(false);
    } catch (error) {
      toast.error("Failed to generate PDF");
    }
  };
  return (
    <div className="min-h-screen bg-[#E0E0E0]">
      {/* Top Header */}
      <TemplateHeader templateName={templateName} />
      
      {/* Main Content */}
      <div className="pt-[80px] pb-[72px] px-4 h-screen flex items-center justify-center overflow-hidden">
        <div className="flex justify-center overflow-hidden">
          {/* MAIN DRAWING AREA */}
          <div className="relative flex items-center overflow-hidden">
            {/* Drawing Area - Fixed size container that scales as a unit */}
            <div 
              id="captureArea" 
              className="relative bg-white shadow-xl"
              style={{
                width: '1400px',
                height: '1000px',
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={templateImage}
                alt="Technical Drawing Template"
                className="w-full h-full object-contain"
                draggable={false}
              />

              {/* Grid Overlay (hidden during PDF generation) */}
              {showGrid && (
                <div
                  data-html2canvas-ignore="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: `50px 50px`
                  }}
                />
              )}

              {/* Form Elements Overlay */}
              {children}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Panel */}
      <FloatingActionPanel
        onSave={handleSave}
        onClear={onClearAll}
        onPreview={handlePreview}
        onDownload={handleDownload}
      />
      
      {/* Preview Dialog */}
      <PrintPreviewDialog
        open={previewOpen}
        onOpenChange={setPreviewOpen}
        previewImage={previewImage}
        onDownload={handleDownload}
        templateName={templateName}
      />
      
      {/* Footer */}
      <TemplateFooter />
    </div>
  );
};