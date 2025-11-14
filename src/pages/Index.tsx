import { useState } from "react";
import { TemplateSelector, Template } from "@/components/TemplateSelector";
import { FormBuilder } from "@/components/FormBuilder";
import { TemplatePreview } from "@/components/TemplatePreview";
import { generatePDF } from "@/lib/pdfGenerator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { toast } from "sonner";

// Sample templates - you can replace these with your own HTML templates
const sampleTemplates: Template[] = [
  {
    id: "product-1",
    name: "Product Specification Sheet",
    description: "Standard product details and specifications",
    thumbnail: "/placeholder.svg",
    fields: [
      { id: "productName", label: "Product Name", type: "text", position: { x: 10, y: 15 }, width: 40, required: true },
      { id: "productCode", label: "Product Code", type: "text", position: { x: 10, y: 25 }, width: 30, required: true },
      { id: "description", label: "Description", type: "textarea", position: { x: 10, y: 35 }, width: 80, required: true },
      { id: "price", label: "Price", type: "number", position: { x: 10, y: 60 }, width: 20, required: true },
      { id: "manufacturer", label: "Manufacturer", type: "text", position: { x: 40, y: 60 }, width: 30, required: false },
    ],
  },
  {
    id: "product-2",
    name: "Technical Data Sheet",
    description: "Detailed technical specifications",
    thumbnail: "/placeholder.svg",
    fields: [
      { id: "title", label: "Title", type: "text", position: { x: 10, y: 10 }, width: 80, required: true },
      { id: "model", label: "Model Number", type: "text", position: { x: 10, y: 20 }, width: 30, required: true },
      { id: "specs", label: "Specifications", type: "textarea", position: { x: 10, y: 30 }, width: 80, required: true },
      { id: "date", label: "Date", type: "date", position: { x: 10, y: 70 }, width: 20, required: true },
    ],
  },
  {
    id: "product-3",
    name: "Product Label",
    description: "Simple product labeling format",
    thumbnail: "/placeholder.svg",
    fields: [
      { id: "name", label: "Product Name", type: "text", position: { x: 20, y: 30 }, width: 60, required: true },
      { id: "sku", label: "SKU", type: "text", position: { x: 20, y: 45 }, width: 30, required: true },
      { id: "barcode", label: "Barcode", type: "text", position: { x: 20, y: 55 }, width: 40, required: false },
    ],
  },
];

const Index = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewData, setPreviewData] = useState<Record<string, string>>({});

  const selectedTemplate = sampleTemplates.find(
    (t) => t.id === selectedTemplateId
  );

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplateId(templateId);
  };

  const handleBackToTemplates = () => {
    setSelectedTemplateId(null);
  };

  const handlePreview = (data: Record<string, string>) => {
    setPreviewData(data);
    setShowPreview(true);
  };

  const handleDownloadPDF = async (data: Record<string, string>) => {
    if (!selectedTemplate) return;

    try {
      setPreviewData(data);
      setShowPreview(true);

      // Wait for the preview to render
      setTimeout(async () => {
        await generatePDF("pdf-content", selectedTemplate.name);
        setShowPreview(false);
        toast.success("PDF downloaded successfully!");
      }, 500);
    } catch (error) {
      toast.error("Failed to generate PDF. Please try again.");
      setShowPreview(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--gradient-subtle)]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-[hsl(200,91%,65%)] rounded-2xl mb-4 shadow-[var(--shadow-medium)]">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Form to PDF Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Select a template, fill in your details, and download as PDF
          </p>
        </div>

        {/* Content */}
        {!selectedTemplateId ? (
          <TemplateSelector
            templates={sampleTemplates}
            selectedTemplate={selectedTemplateId}
            onSelect={handleTemplateSelect}
          />
        ) : selectedTemplate ? (
          <div className="space-y-6">
            <Button
              variant="ghost"
              onClick={handleBackToTemplates}
              className="mb-4 transition-all duration-300 hover:shadow-[var(--shadow-soft)]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Button>
            <FormBuilder
              fields={selectedTemplate.fields}
              onSubmit={handleDownloadPDF}
              onPreview={handlePreview}
              templateName={selectedTemplate.name}
            />
          </div>
        ) : null}

        {/* Preview Modal */}
        {showPreview && selectedTemplate && (
          <TemplatePreview
            template={selectedTemplate}
            formData={previewData}
            onClose={() => setShowPreview(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
