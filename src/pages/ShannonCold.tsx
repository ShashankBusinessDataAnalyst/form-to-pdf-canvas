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
          id="creationDate"
          value={formData.sampleDate}
          onChange={(val) => handleFieldChange("creationDate", val)}
          position={{ top: 19, left: 340 }}
          placeholder="DD/MM/YYYY"
        />
        <FormDatePicker
          id="SODate"
          value={formData.sampleDate}
          onChange={(val) => handleFieldChange("SODate", val)}
          position={{ top: 750, left: 470 }}
          placeholder="DD/MM/YYYY"
        />

        {/* Text Input - Sample */}
        <FormTextInput
          id="clientName"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("clientName", val)}
          position={{ top: 733, left: 320 }}
          width={200}
          placeholder="clientName"
        />

        <FormTextInput
          id="SONumber"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("SONumber", val)}
          position={{ top: 750, left: 280 }}
          width={200}
          placeholder="SONumber"
        />
        {/* Checkbox - dimension */}
        <FormCheckbox
          id="3ft"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("3ft", val)}
          position={{ top: 344, left: 260 }}
        />

        {/* Number Input - dimension */}
        <FormNumberInput
          id="3ftd"
          value={formData.sampleNumber}
          onChange={(val) => handleFieldChange("3ftd", val)}
          position={{ top: 346, left: 320 }}
          width={50}
          placeholder="QTY"
        />
        <FormCheckbox
          id="4ft"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("4ft", val)}
          position={{ top: 364, left: 260 }}
        />
        
        <FormNumberInput
          id="4ftd"
          value={formData.sampleNumber}
          onChange={(val) => handleFieldChange("4ftd", val)}
          position={{ top: 366, left: 320 }}
          width={50}
          placeholder="QTY"
        />
        <FormCheckbox
          id="5ft"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("5ft", val)}
          position={{ top: 380, left: 260 }}
        />
        
        <FormNumberInput
          id="5ftd"
          value={formData.sampleNumber}
          onChange={(val) => handleFieldChange("5ftd", val)}
          position={{ top: 382, left: 320 }}
          width={50}
          placeholder="QTY"
        />
        <FormCheckbox
          id="6ft"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("6ft", val)}
          position={{ top: 400, left: 260 }}
        />
        
        <FormNumberInput
          id="6ftd"
          value={formData.sampleNumber}
          onChange={(val) => handleFieldChange("6ftd", val)}
          position={{ top: 400, left: 320 }}
          width={50}
          placeholder="QTY"
        />
        {/* Checkbox - Cabin Light */}
        <FormCheckbox
          id="CNW"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("CNW", val)}
          position={{ top: 324, left: 817 }}
        />
        <FormCheckbox
          id="CCW"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("CCW", val)}
          position={{ top: 344, left: 817 }}
        />
        {/* Checkbox - Skirting Light */}
        <FormCheckbox
          id="SNW"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 324, left: 937 }}
        />
        <FormCheckbox
          id="SCW"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("SCW", val)}
          position={{ top: 344, left: 937 }}
        />
        {/* Checkbox - Drop Light */}
        <FormCheckbox
          id="DNW"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 324, left: 1077 }}
        />
        <FormCheckbox
          id="DCW"
          checked={formData.sampleCheckbox}
          onChange={(val) => handleFieldChange("DCW", val)}
          position={{ top: 344, left: 1077 }}
        />


        {/* Textarea - Sample */}
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 535, left: 40 }}
          width={650}
          height={180}
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default ShannonCold;
