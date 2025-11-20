import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Eye, ZoomIn, ZoomOut } from "lucide-react";
interface FloatingActionPanelProps {
  onSave: () => void;
  onClear?: () => void;
  onPreview: () => void;
  onDownload: () => void;
  zoom: number;
  onZoomChange: (value: number) => void;
}
export const FloatingActionPanel: React.FC<FloatingActionPanelProps> = ({
  onSave,
  onClear,
  onPreview,
  onDownload,
  zoom,
  onZoomChange,
}) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
      {/* Zoom Control */}
      <div className="w-[180px] bg-background border-2 border-border rounded-lg p-4 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Zoom</span>
          <span className="text-sm font-bold text-primary">{Math.round(zoom * 100)}%</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 shrink-0"
            onClick={() => onZoomChange(Math.max(0.25, zoom - 0.1))}
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Slider
            value={[zoom]}
            onValueChange={(values) => onZoomChange(values[0])}
            min={0.25}
            max={2}
            step={0.05}
            className="flex-1"
          />
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 shrink-0"
            onClick={() => onZoomChange(Math.min(2, zoom + 0.1))}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="w-full mt-2 h-7 text-xs" onClick={() => onZoomChange(1)}>
          Reset (125%)
        </Button>
      </div>

      {onClear && (
        <Button
          onClick={onClear}
          className="w-[140px] h-[50px] bg-[#FF5B5B] hover:bg-[#EE4A4A] text-white font-medium shadow-lg"
        >
          Clear
        </Button>
      )}

      <Button
        onClick={onPreview}
        variant="outline"
        className="w-[140px] h-[50px] bg-background border-2 text-foreground font-medium shadow-lg gap-2 hover:bg-accent"
      >
        <Eye className="h-4 w-4" />
        Preview PDF
      </Button>

      <Button
        onClick={onDownload}
        className="w-[140px] h-[50px] bg-[#00DD00] hover:bg-[#00BB00] text-black font-medium shadow-lg"
      >
        Download PDF
      </Button>
    </div>
  );
};
