import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generatePDF } from "@/lib/pdfGenerator";
import { toast } from "sonner";
import { usePrintMode } from "@/contexts/PrintModeContext";
import { PrintPreviewDialog } from "./PrintPreviewDialog";
import html2canvas from "html2canvas";
import { Eye } from "lucide-react";
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
  const {
    setPrintMode
  } = usePrintMode();
  const [showGrid, setShowGrid] = useState(false);
  const [gridSpacing, setGridSpacing] = useState(50);
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
  return <div className="flex h-screen overflow-x-auto min-w-[1440px]">
      {/* LEFT SIDEBAR */}
      <div className="w-[260px] bg-[#7286FF] p-5 fixed top-0 left-0 h-full overflow-y-auto">
        <h2 className="text-black text-xl font-bold mb-4 mt-0">Company Logo</h2>

        <div className="mb-3">
          <Label htmlFor="salesPerson" className="text-black">Sales Person Name</Label>
          <Input type="text" id="salesPerson" className="w-full mt-1" />
        </div>

        <div className="mb-3">
          <Label htmlFor="date" className="text-black">Date</Label>
          <Input type="date" id="date" className="w-full mt-1" />
        </div>

        <div className="mb-3">
          <Label htmlFor="model" className="text-black">Model</Label>
          <Input type="text" id="model" className="w-full mt-1" />
        </div>

        

        <Button onClick={handleSave} className="w-full mt-3">
          Save
        </Button>
        {onClearAll && <Button onClick={onClearAll} variant="destructive" className="w-full mt-3">
            Clear All
          </Button>}
        <Button onClick={handlePreview} variant="outline" className="w-full mt-3 gap-2">
          <Eye className="h-4 w-4" />
          Preview PDF
        </Button>
        <Button onClick={handleDownload} className="w-full mt-3 bg-[#00DD00] hover:bg-[#00BB00] text-black">
          Download PDF
        </Button>
      </div>

      {/* MAIN DRAWING AREA */}
      <div className="ml-[260px] flex-1 bg-[#E0E0E0] min-h-screen overflow-y-auto py-8">
        <div className="flex justify-center">
          <div className="relative">
            {/* HORIZONTAL RULER (TOP) */}
            <div className="flex">
              <div className="w-[30px] h-[30px] bg-[#C0C0C0]"></div>
              <div className="w-[1200px] h-[30px] bg-[#F0F0F0] border-b border-r border-gray-400 relative">
                {Array.from({
                length: 13
              }).map((_, i) => {
                const position = i * 100;
                return <div key={`h-${i}`} className="absolute top-0 h-full" style={{
                  left: `${position}px`
                }}>
                      <div className="w-px h-3 bg-gray-600"></div>
                      <span className="absolute top-3 -translate-x-1/2 text-[10px] text-gray-700">
                        {position}
                      </span>
                      {/* Minor ticks every 50px */}
                      {i < 12 && <div className="absolute w-px h-2 bg-gray-400" style={{
                    left: '50px',
                    top: 0
                  }}></div>}
                    </div>;
              })}
              </div>
            </div>

            {/* MAIN CONTENT WITH VERTICAL RULER */}
            <div className="flex">
              {/* VERTICAL RULER (LEFT) */}
              <div className="w-[30px] h-[800px] bg-[#F0F0F0] border-r border-b border-gray-400 relative">
                {Array.from({
                length: 9
              }).map((_, i) => {
                const position = i * 100;
                return <div key={`v-${i}`} className="absolute left-0 w-full" style={{
                  top: `${position}px`
                }}>
                      <div className="h-px w-3 bg-gray-600"></div>
                      <span className="absolute left-3 top-0 -translate-y-1/2 text-[10px] text-gray-700">
                        {position}
                      </span>
                      {/* Minor ticks every 50px */}
                      {i < 8 && <div className="absolute h-px w-2 bg-gray-400" style={{
                    top: '50px',
                    left: 0
                  }}></div>}
                    </div>;
              })}
              </div>

              {/* DRAWING AREA */}
              <div id="captureArea" className="relative bg-white border-2 border-purple-600 inline-block">
          {/* IMAGE */}
          <div className="relative">
            <img src={templateImage} alt={templateName} className="block w-[1200px] h-[800px]" />

            {/* GRID OVERLAY */}
            {showGrid && <svg className="absolute top-0 left-0 pointer-events-none" width="1200" height="800" style={{
                  zIndex: 10
                }} data-html2canvas-ignore="true">
                {/* Vertical lines */}
                {Array.from({
                    length: Math.floor(1200 / gridSpacing) + 1
                  }).map((_, i) => <line key={`v-${i}`} x1={i * gridSpacing} y1={0} x2={i * gridSpacing} y2={800} stroke="rgba(0,0,0,0.15)" strokeWidth="1" />)}
                
                {/* Horizontal lines */}
                {Array.from({
                    length: Math.floor(800 / gridSpacing) + 1
                  }).map((_, i) => <line key={`h-${i}`} x1={0} y1={i * gridSpacing} x2={1200} y2={i * gridSpacing} stroke="rgba(0,0,0,0.15)" strokeWidth="1" />)}
              </svg>}

                  {/* FORM ELEMENTS */}
                  {children}
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>

      <PrintPreviewDialog open={previewOpen} onOpenChange={setPreviewOpen} previewImage={previewImage} onDownload={handleDownload} templateName={templateName} />
    </div>;
};