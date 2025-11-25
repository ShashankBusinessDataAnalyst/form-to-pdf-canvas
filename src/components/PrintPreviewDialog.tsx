import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface PrintPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  previewImage: string | null;
  onDownload: () => void;
  templateName: string;
}

export const PrintPreviewDialog: React.FC<PrintPreviewDialogProps> = ({
  open,
  onOpenChange,
  previewImage,
  onDownload,
  templateName,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-6 flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>PDF Preview</DialogTitle>
          <DialogDescription>
            Preview how your {templateName} will look in the downloaded PDF
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto border rounded-lg bg-gray-50 p-4 min-h-0">
          {previewImage ? (
            <img
              src={previewImage}
              alt="PDF Preview"
              className="max-w-full h-auto mx-auto shadow-lg border-2 border-black"
              style={{ maxHeight: '60vh' }}
            />
          ) : (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              Generating preview...
            </div>
          )}
        </div>

        <DialogFooter className="gap-2 flex-shrink-0 mt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            Close
          </Button>
          <Button
            onClick={onDownload}
            className="bg-[#00DD00] hover:bg-[#00BB00] text-black gap-2"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
