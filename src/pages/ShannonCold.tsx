import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormCheckbox } from "@/components/FormCheckbox";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormTextarea } from "@/components/FormTextarea";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { TemplateNavigation } from "@/components/TemplateNavigation";
import coldTemplate from "@/assets/cold-template.png";

const ShannonCold = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    sampleDate: undefined,
    sampleText: "",
    sampleNumber: "",
    sampleCheckbox: false,
    sampleTextarea: "",
  });

  const handleFieldChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClearAll = () => {
    setFormData({
      sampleDate: undefined,
      sampleText: "",
      sampleNumber: "",
      sampleCheckbox: false,
      sampleTextarea: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateNavigation currentTemplate="cold" />
      <TemplateEditor
        templateImage={coldTemplate}
        templateName="SHANNON COLD - Technical Drawing"
        onClearAll={handleClearAll}
      >
        {/* Sample Elements - One of Each Type */}
        
        {/* Date Picker - Sample */}
        <FormDatePicker
          id="sampleDate"
          value={formData.sampleDate}
          onChange={(val) => handleFieldChange("sampleDate", val)}
          position={{ top: 350, left: 600 }}
          placeholder="DD/MM/YYYY"
        />

        {/* Text Input - Sample */}
        <FormTextInput
          id="sampleText"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("sampleText", val)}
          position={{ top: 425, left: 600 }}
          width={200}
        />

        {/* Number Input - Sample */}
        <FormNumberInput
          id="sampleNumber"
          value={formData.sampleNumber}
          onChange={(val) => handleFieldChange("sampleNumber", val)}
          position={{ top: 500, left: 600 }}
          width={150}
        />

        {/* Checkbox - Sample */}
        <FormCheckbox
          id="sampleCheckbox"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("sampleCheckbox", val)}
          position={{ top: 575, left: 650 }}
        />

        {/* Textarea - Sample */}
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 625, left: 600 }}
          width={300}
          height={100}
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default ShannonCold;
