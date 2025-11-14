import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: "text" | "textarea" | "number" | "date" | "email";
  position: { x: number; y: number };
  width?: number;
  required?: boolean;
}

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string | null;
  onSelect: (templateId: string) => void;
}

export const TemplateSelector = ({
  templates,
  selectedTemplate,
  onSelect,
}: TemplateSelectorProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Select a Template</h2>
        <p className="text-muted-foreground">Choose a product template to get started</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden group",
              selectedTemplate === template.id
                ? "ring-2 ring-primary shadow-md"
                : "hover:shadow-[var(--shadow-medium)]"
            )}
            onClick={() => onSelect(template.id)}
          >
            <div className="aspect-[4/3] bg-muted relative overflow-hidden">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {selectedTemplate === template.id && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    Selected
                  </div>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-foreground mb-1">
                {template.name}
              </h3>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
