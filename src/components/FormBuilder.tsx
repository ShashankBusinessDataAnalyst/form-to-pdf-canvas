import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "./TemplateSelector";
import { Download, Eye } from "lucide-react";

interface FormBuilderProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  onPreview: (data: Record<string, string>) => void;
  templateName: string;
}

export const FormBuilder = ({
  fields,
  onSubmit,
  onPreview,
  templateName,
}: FormBuilderProps) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handlePreviewClick = () => {
    onPreview(formData);
  };

  const isFormValid = fields
    .filter((field) => field.required)
    .every((field) => formData[field.id]?.trim());

  return (
    <Card className="p-6 shadow-[var(--shadow-medium)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Fill in {templateName}
        </h2>
        <p className="text-muted-foreground">
          Complete all required fields to generate your PDF
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="text-foreground font-medium">
                {field.label}
                {field.required && <span className="text-destructive ml-1">*</span>}
              </Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.id}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                  className="min-h-[100px] transition-all duration-200 focus:shadow-[var(--shadow-soft)]"
                />
              ) : (
                <Input
                  id={field.id}
                  type={field.type}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  required={field.required}
                  className="transition-all duration-200 focus:shadow-[var(--shadow-soft)]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handlePreviewClick}
            disabled={!isFormValid}
            className="flex-1 transition-all duration-300"
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button
            type="submit"
            disabled={!isFormValid}
            className="flex-1 bg-gradient-to-r from-primary to-[hsl(200,91%,65%)] hover:opacity-90 transition-all duration-300 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)]"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </form>
    </Card>
  );
};
