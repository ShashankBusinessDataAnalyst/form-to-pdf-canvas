import { Template } from "./TemplateSelector";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TemplatePreviewProps {
  template: Template;
  formData: Record<string, string>;
  onClose: () => void;
}

export const TemplatePreview = ({
  template,
  formData,
  onClose,
}: TemplatePreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-auto p-6 relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="mb-4">
          <h2 className="text-2xl font-bold text-foreground">Preview</h2>
          <p className="text-muted-foreground">{template.name}</p>
        </div>

        <div id="pdf-content" className="relative bg-white rounded-lg overflow-hidden">
          <img
            src={template.thumbnail}
            alt={template.name}
            className="w-full h-auto"
          />
          {template.fields.map((field) => {
            const value = formData[field.id];
            if (!value) return null;

            return (
              <div
                key={field.id}
                className="absolute text-gray-900 font-medium"
                style={{
                  left: `${field.position.x}%`,
                  top: `${field.position.y}%`,
                  width: field.width ? `${field.width}%` : "auto",
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};
