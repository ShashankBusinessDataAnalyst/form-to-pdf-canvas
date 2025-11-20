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
          position={{ top: 150, left: 320 }}
          placeholder="DD/MM/YYYY"
        />

        {/* Text Input - Sample */}
        <FormTextInput
          id="sampleText"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("sampleText", val)}
          position={{ top: 225, left: 320 }}
          width={200}
        />

        {/* Number Input - Sample */}
        <FormNumberInput
          id="sampleNumber"
          value={formData.sampleNumber}
          onChange={(val) => handleFieldChange("sampleNumber", val)}
          position={{ top: 300, left: 320 }}
          width={150}
        />

        {/* Checkbox - Sample */}
        <FormCheckbox
          id="sampleCheckbox"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("sampleCheckbox", val)}
          position={{ top: 375, left: 370 }}
        />

        {/* Textarea - Sample */}
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 425, left: 320 }}
          width={250}
          height={100}
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default ShannonCold;
