import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import hotTemplate from "@/assets/hot-template.png";

const Product4 = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    clientName: "",
    soNumber: "",
    date: new Date(),
    qty3ft: "",
    qty4ft: "",
    material: false,
  });

  const handleFieldChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClearAll = () => {
    setFormData({
      clientName: "",
      soNumber: "",
      date: new Date(),
      qty3ft: "",
      qty4ft: "",
      material: false,
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={hotTemplate}
        templateName="Product 4 - Technical Drawing"
        onClearAll={handleClearAll}
      >
        <FormTextInput
          id="clientName"
          value={formData.clientName}
          onChange={(val) => handleFieldChange("clientName", val)}
          position={{ top: 95, left: 165 }}
          width={200}
          placeholder="Client Name"
        />
        <FormTextInput
          id="soNumber"
          value={formData.soNumber}
          onChange={(val) => handleFieldChange("soNumber", val)}
          position={{ top: 95, left: 430 }}
          width={150}
          placeholder="SO Number"
        />
        <FormDatePicker
          id="date"
          value={formData.date}
          onChange={(val) => handleFieldChange("date", val)}
          position={{ top: 95, left: 650 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 210, left: 180 }}
          width={80}
          placeholder="Qty"
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 240, left: 180 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="material"
          checked={formData.material}
          onChange={(val) => handleFieldChange("material", val)}
          position={{ top: 300, left: 180 }}
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default Product4;
