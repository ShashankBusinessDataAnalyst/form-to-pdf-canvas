import React from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface FloatingActionPanelProps {
  onSave: () => void;
  onClear?: () => void;
  onPreview: () => void;
  onDownload: () => void;
}

export const FloatingActionPanel: React.FC<FloatingActionPanelProps> = ({
  onSave,
  onClear,
  onPreview,
  onDownload,
}) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-40">
      <Button 
        onClick={onSave}
        className="w-[140px] h-[50px] bg-[#5B7CFF] hover:bg-[#4A6BEE] text-white font-medium shadow-lg"
      >
        Save
      </Button>
      
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
