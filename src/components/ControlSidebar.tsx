import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ZoomIn, ZoomOut, RotateCcw, Trash2, Eye, Download } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ControlSidebarProps {
  zoom: number;
  onZoomChange: (value: number) => void;
  onClear?: () => void;
  onPreview: () => void;
  onDownload: () => void;
}

export const ControlSidebar: React.FC<ControlSidebarProps> = ({
  zoom,
  onZoomChange,
  onClear,
  onPreview,
  onDownload,
}) => {
  const handleZoomIn = () => {
    onZoomChange(Math.min(2, zoom + 0.25));
  };

  const handleZoomOut = () => {
    onZoomChange(Math.max(0.25, zoom - 0.25));
  };

  const handleZoomReset = () => {
    onZoomChange(1);
  };

  return (
    <aside className="w-1/5 bg-background border-r border-border flex flex-col p-6 space-y-6 overflow-y-auto">
      {/* Zoom Controls */}
      <Card className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Zoom</span>
            <span className="text-sm font-mono text-muted-foreground">
              {Math.round(zoom * 100)}%
            </span>
          </div>
          
          <Slider
            value={[zoom]}
            onValueChange={(value) => onZoomChange(value[0])}
            min={0.25}
            max={2}
            step={0.05}
            className="w-full"
          />
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              className="flex-1"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomReset}
              className="flex-1"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              className="flex-1"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3 flex-1">
        <h3 className="text-sm font-medium text-muted-foreground px-1">Actions</h3>
        
        {onClear && (
          <Button
            onClick={onClear}
            variant="destructive"
            className="w-full h-12 gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Clear All
          </Button>
        )}
        
        <Button
          onClick={onPreview}
          variant="outline"
          className="w-full h-12 gap-2"
        >
          <Eye className="h-4 w-4" />
          Preview PDF
        </Button>
        
        <Button
          onClick={onDownload}
          className="w-full h-12 gap-2 bg-green-600 hover:bg-green-700 text-white"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      {/* Instructions */}
      <div className="pt-4 border-t border-border space-y-2">
        <h4 className="text-xs font-medium text-muted-foreground">Controls</h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• Scroll to zoom</li>
          <li>• Middle-click to pan</li>
          <li>• Left-click + drag when zoomed</li>
        </ul>
      </div>
    </aside>
  );
};
