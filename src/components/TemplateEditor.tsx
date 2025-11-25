import React, { useState, useEffect } from "react";
import { generatePDF } from "@/lib/pdfGenerator";
import { toast } from "sonner";
import { usePrintMode } from "@/contexts/PrintModeContext";
import { PrintPreviewDialog } from "./PrintPreviewDialog";
import { TemplateHeader } from "./TemplateHeader";
import { TemplateFooter } from "./TemplateFooter";
import { ControlSidebar } from "./ControlSidebar";
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
  const [autoScale, setAutoScale] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragButton, setDragButton] = useState<number | null>(null);

  // Calculate automatic scale factor to fit template in viewport
  useEffect(() => {
    const calculateScale = () => {
      const availableHeight = window.innerHeight; // header + footer
      const availableWidth = (window.innerWidth * 1); // 80% of screen - padding
      const containerHeight = 595; // A4 landscape height at 72 DPI
      const containerWidth = 842;  // A4 landscape width at 72 DPI
      
      const scaleHeight = availableHeight / containerHeight;
      const scaleWidth = availableWidth / containerWidth;
      
      setAutoScale(Math.min(scaleHeight, scaleWidth, 1));
    };
    
    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);


  // Combined scale factor (auto-fit * manual zoom)
  const scale = autoScale * zoomLevel;


  // Prevent default middle-click behavior (auto-scroll)
  useEffect(() => {
    const preventMiddleClick = (e: MouseEvent) => {
      if (e.button === 1) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('mousedown', preventMiddleClick);
    return () => document.removeEventListener('mousedown', preventMiddleClick);
  }, []);

  // Reset pan offset when zoom returns to 1
  useEffect(() => {
    if (zoomLevel === 1) {
      setPanOffset({ x: 0, y: 0 });
    }
  }, [zoomLevel]);

  // Handle mouse down - start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    // Check if the target is an interactive form element
    const target = e.target as HTMLElement;
    const isInteractiveElement = 
      target.tagName === 'INPUT' || 
      target.tagName === 'TEXTAREA' || 
      target.tagName === 'BUTTON' ||
      target.tagName === 'SELECT' ||
      target.closest('button') ||
      target.closest('[role="checkbox"]') ||
      target.closest('[data-radix-popper-content-wrapper]') ||
      target.closest('.popover-content');

    // Don't start dragging if clicking on interactive elements
    if (isInteractiveElement) {
      return; // Let the form element handle the click
    }

    // Support both left-click (button 0) and middle-click (button 1)
    if (e.button === 0 || e.button === 1) {
      setIsDragging(true);
      setDragButton(e.button);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
      e.preventDefault();
    }
  };

  // Handle mouse move - update pan position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPanOffset({ x: newX, y: newY });
    }
  };

  // Handle mouse up - stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
    setDragButton(null);
  };

  // Handle mouse leave - stop dragging when leaving the container
  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragButton(null);
  };

  const capturePreview = async (): Promise<string> => {
    const element = document.getElementById("captureArea");
    if (!element) {
      throw new Error("Element not found");
    }

    const htmlElement = element as HTMLElement;

    // Store original transform and origin
    const originalTransform = htmlElement.style.transform;
    const originalTransformOrigin = htmlElement.style.transformOrigin;

    try {
      // Enable print mode
      setPrintMode(true);

      // Reset transform to scale(1) with no translation for accurate capture
      htmlElement.style.transform = "translate(0px, 0px) scale(1)";
      htmlElement.style.transformOrigin = "top left";
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Hide grid overlay during capture
      const gridOverlay = element.querySelector('[data-html2canvas-ignore="true"]');
      if (gridOverlay) {
        (gridOverlay as HTMLElement).style.display = "none";
      }

      // Measure element to capture exact visible size
      const rect = htmlElement.getBoundingClientRect();

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
        (gridOverlay as HTMLElement).style.display = "";
      }

      // Restore original transform and origin
      htmlElement.style.transform = originalTransform;
      htmlElement.style.transformOrigin = originalTransformOrigin;

      // Disable print mode
      setPrintMode(false);
      return canvas.toDataURL("image/png");
    } catch (error) {
      // Restore transform and origin even on error
      htmlElement.style.transform = originalTransform;
      htmlElement.style.transformOrigin = originalTransformOrigin;
      setPrintMode(false);
      throw error;
    }
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
      
      {/* Main Content Area with Sidebar */}
      <div className="flex pt-[80px] pb-[72px] h-screen">
        {/* Left Control Sidebar - 20% */}
        <ControlSidebar
          zoom={zoomLevel}
          onZoomChange={setZoomLevel}
          onClear={onClearAll}
          onPreview={handlePreview}
          onDownload={handleDownload}
        />
        
        {/* Right Template Area - 80% */}
        <div 
          className="flex-1 flex items-start justify-center overflow-hidden px-4 py-4"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          <div className="flex justify-center overflow-hidden">
            {/* MAIN DRAWING AREA */}
            <div className="relative flex items-center overflow-hidden">
              {/* Drawing Area - Fixed size container that scales as a unit */}
              <div 
                id="captureArea" 
                className="relative bg-white shadow-xl border-2 border-border"
                style={{
                  width: '1123px',   // A4 landscape width at 72 DPI
                  height: '794px',  // A4 landscape height at 72 DPI
                  transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${scale})`,
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
      </div>
      
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