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
      const availableHeight = window.innerHeight - 160; // header + footer
      const availableWidth = (window.innerWidth * 0.8) - 32; // 80% of screen - padding
      const containerHeight = 842; // A4 portrait height at 72 DPI
      const containerWidth = 595;  // A4 portrait width at 72 DPI
      
      const scaleHeight = availableHeight / containerHeight;
      const scaleWidth = availableWidth / containerWidth;
      
      setAutoScale(Math.min(scaleHeight, scaleWidth, 1));
    };
    
    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Reset pan when zoom changes
  useEffect(() => {
    setPanOffset({ x: 0, y: 0 });
  }, [zoomLevel]);

  // Combined scale factor (auto-fit * manual zoom)
  const scale = autoScale * zoomLevel;

  // Pan handlers - support both left-click when zoomed and middle-click always
  const handleMouseDown = (e: React.MouseEvent) => {
    // Middle mouse button (button 1) always allows panning
    if (e.button === 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragButton(1);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
    // Left mouse button (button 0) only when zoomed > 1
    else if (e.button === 0 && zoomLevel > 1) {
      setIsDragging(true);
      setDragButton(0);
      setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragButton(null);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragButton(null);
  };

  // Wheel zoom handler - zoom centered on cursor position
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    
    // Get mouse position relative to container
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    
    // Calculate zoom change
    const zoomDelta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoomLevel = Math.max(0.25, Math.min(2, zoomLevel + zoomDelta));
    
    if (newZoomLevel !== zoomLevel) {
      // Calculate how much to adjust pan to keep zoom centered on cursor
      const scaleFactor = newZoomLevel / zoomLevel;
      const newPanX = mouseX - (mouseX - panOffset.x) * scaleFactor;
      const newPanY = mouseY - (mouseY - panOffset.y) * scaleFactor;
      
      setZoomLevel(newZoomLevel);
      setPanOffset({ x: newPanX, y: newPanY });
    }
  };

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
          onWheel={handleWheel}
          style={{
            cursor: isDragging 
              ? 'grabbing' 
              : (dragButton === 1 || zoomLevel > 1) 
              ? 'grab' 
              : 'default',
          }}
        >
          <div className="flex justify-center overflow-hidden">
            {/* MAIN DRAWING AREA */}
            <div className="relative flex items-center overflow-hidden">
              {/* Drawing Area - Fixed size container that scales as a unit */}
              <div 
                id="captureArea" 
                className="relative bg-white shadow-xl"
                style={{
                  width: '595px',   // A4 width at 72 DPI
                  height: '842px',  // A4 height at 72 DPI
                  transform: `scale(${scale}) translate(${panOffset.x / scale}px, ${panOffset.y / scale}px)`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out',
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