import React, { useState } from "react";
import { generatePDF } from "@/lib/pdfGenerator";
import { toast } from "sonner";
import { usePrintMode } from "@/contexts/PrintModeContext";
import { PrintPreviewDialog } from "./PrintPreviewDialog";
import { TemplateHeader } from "./TemplateHeader";
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
      await generatePDF("captureArea", `${templateName}-form`, setPrintMode);
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
      <div className="pt-[60px] pb-8">
        <div className="flex justify-center">
          {/* MAIN DRAWING AREA */}
          <div className="relative">
            {/* Top Ruler */}
            <div className="h-8 bg-gray-100 border-b border-gray-300 flex items-center justify-center text-xs text-gray-500 mb-2">
              Ruler (inches)
            </div>

            {/* Left Ruler and Drawing Area */}
            <div className="flex">
              {/* Left Ruler */}
              <div className="w-8 bg-gray-100 border-r border-gray-300 flex items-center justify-center text-xs text-gray-500 mr-2 writing-mode-vertical">
                Ruler
              </div>

              {/* Drawing Area */}
              <div id="captureArea" className="relative bg-white shadow-xl">
                <img
                  src={templateImage}
                  alt="Technical Drawing Template"
                  className="w-full h-auto block"
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
    </div>
  );
};