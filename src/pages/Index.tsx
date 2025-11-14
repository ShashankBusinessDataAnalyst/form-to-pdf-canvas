import { useState } from "react";
import { TemplateSelector, Template } from "@/components/TemplateSelector";
import { FormBuilder } from "@/components/FormBuilder";
import { TemplatePreview } from "@/components/TemplatePreview";
import { generatePDF } from "@/lib/pdfGenerator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";
import { toast } from "sonner";
import coldTemplate from "@/assets/cold-template.png";

// Templates based on your product specification sheets
const sampleTemplates: Template[] = [
  {
    id: "shannon-cold",
    name: "SHANNON COLD - Refrigeration Unit",
    description: "Technical specification sheet for refrigeration display units",
    thumbnail: coldTemplate,
    fields: [
      { id: "model", label: "Model Name", type: "text", position: { x: 9, y: 3.5 }, width: 15, required: true },
      { id: "dateOfCreation", label: "Date of Creation", type: "date", position: { x: 30, y: 3.5 }, width: 12, required: true },
      { id: "productionOrderNo", label: "Production Order No.", type: "text", position: { x: 30, y: 46 }, width: 20, required: true },
      { id: "clientName", label: "Client Name", type: "text", position: { x: 30, y: 107 }, width: 25, required: true },
      { id: "soNumber", label: "S.O No.", type: "text", position: { x: 30, y: 110 }, width: 15, required: false },
      { id: "soDate", label: "S.O Date", type: "date", position: { x: 45, y: 110 }, width: 12, required: false },
      { id: "approvedDate", label: "Client Approved Date", type: "date", position: { x: 60, y: 110 }, width: 12, required: false },
      { id: "handOverDate", label: "Production Hand Over Date", type: "date", position: { x: 80, y: 110 }, width: 12, required: false },
      { id: "length3ft", label: "Length 3ft Qty", type: "number", position: { x: 18, y: 51 }, width: 6, required: false },
      { id: "length4ft", label: "Length 4ft Qty", type: "number", position: { x: 18, y: 55 }, width: 6, required: false },
      { id: "length5ft", label: "Length 5ft Qty", type: "number", position: { x: 18, y: 59 }, width: 6, required: false },
      { id: "length6ft", label: "Length 6ft Qty", type: "number", position: { x: 18, y: 63 }, width: 6, required: false },
      { id: "preparedBy", label: "Prepared By", type: "text", position: { x: 2, y: 105 }, width: 10, required: false },
      { id: "reviewedBy", label: "Reviewed By", type: "text", position: { x: 12, y: 105 }, width: 10, required: false },
      { id: "approvedBy", label: "Approved By", type: "text", position: { x: 22, y: 105 }, width: 10, required: false },
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
