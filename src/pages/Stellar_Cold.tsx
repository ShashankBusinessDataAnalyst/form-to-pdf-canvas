import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Stellar_cold_tmpt from "@/assets/STELLAR_COLD_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const Stellar_Cold = () => {
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
        templateImage={Stellar_cold_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Stellar Cold Template"
        onClearAll={handleClearAll}
      >
        <FormTextInput
          id="clientName"
          value={formData.clientName}
          onChange={(val) => handleFieldChange("clientName", val)}
          position={{ top: 730, left: 360 }}
          width={300}
          placeholder="Client Name"
        />
        <FormTextInput
          id="soNumber"
          value={formData.soNumber}
          onChange={(val) => handleFieldChange("soNumber", val)}
          position={{ top: 750, left: 330 }}
          width={95}
          placeholder="SO Number"
        />
        <FormDatePicker
          id="SOdate"
          value={formData.date}
          onChange={(val) => handleFieldChange("date", val)}
          position={{ top: 19, left: 350 }}
        />
        <FormDatePicker
          id="date"
          value={formData.date}
          onChange={(val) => handleFieldChange("date", val)}
          position={{ top: 750, left: 450 }}
        />
        <FormCheckbox
          id="3ft"
          checked={formData.material}
          onChange={(val) => handleFieldChange("3ft", val)}
          position={{ top: 321, left: 225 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 322, left: 250 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="4ft"
          checked={formData.material}
          onChange={(val) => handleFieldChange("4ft", val)}
          position={{ top: 339, left: 225 }}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 340, left: 250 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="5ft"
          checked={formData.material}
          onChange={(val) => handleFieldChange("5ft", val)}
          position={{ top: 359, left: 225 }}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 359, left: 250 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="6ft"
          checked={formData.material}
          onChange={(val) => handleFieldChange("6ft", val)}
          position={{ top: 377, left: 225 }}
        />
        <FormNumberInput
          id="qty6ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty6ft", val)}
          position={{ top: 377, left: 250 }}
          width={80}
          placeholder="Qty"
        />

        <FormCheckbox
          id="CNW"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CNW", val)}
          position={{ top: 321, left: 815 }}
        />
        <FormCheckbox
          id="SNW"
          checked={formData.material}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 321, left: 935 }}
        />
        <FormCheckbox
          id="DNW"
          checked={formData.material}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 321, left: 1078 }}
        />
        <FormCheckbox
          id="CCW"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CNW", val)}
          position={{ top: 339, left: 815 }}
        />
        <FormCheckbox
          id="SWW"
          checked={formData.material}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 339, left: 935 }}
        />
        <FormCheckbox
          id="DWW"
          checked={formData.material}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 339, left: 1078 }}
        />

        <FormCheckbox
          id="wheels"
          checked={formData.material}
          onChange={(val) => handleFieldChange("wheels", val)}
          position={{ top: 394, left: 888 }}
        />
         <FormCheckbox
          id="Alegs"
          checked={formData.material}
          onChange={(val) => handleFieldChange("Alegs", val)}
          position={{ top: 414, left: 888 }}
        />
        <FormCheckbox
          id="Sheleves"
          checked={formData.material}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 394, left: 1078 }}
        />

        <FormCheckbox
          id="CF1"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CF1", val)}
          position={{ top: 486, left: 848 }}
        />
        <FormCheckbox
          id="CF2"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CF2", val)}
          position={{ top: 505, left: 848 }}
        />
        <FormCheckbox
          id="CF3"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CF3", val)}
          position={{ top: 523, left: 848 }}
        />
        <FormCheckbox
          id="CF4"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CF4", val)}
          position={{ top: 542, left: 848 }}
        />
        <FormCheckbox
          id="CF5"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CF5", val)}
          position={{ top: 560, left: 848 }}
        />
        <FormCheckbox
          id="CT1"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CT1", val)}
          position={{ top: 486, left: 890 }}
        />
        <FormCheckbox
          id="CT2"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CT2", val)}
          position={{ top: 505, left: 890 }}
        />
        <FormCheckbox
          id="CT3"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CT3", val)}
          position={{ top: 523, left: 890 }}
        />
        <FormCheckbox
          id="CT4"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CT4", val)}
          position={{ top: 542, left: 890 }}
        />
        <FormCheckbox
          id="CT5"
          checked={formData.material}
          onChange={(val) => handleFieldChange("CT5", val)}
          position={{ top: 560, left: 890 }}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 500, left: 920 }}
          width={170}
          height={80}
          placeholder="Add Text"
        />
        <FormTextInput
          id="FCC"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("FCC", val)}
          position={{ top: 585, left: 800 }}
          width={80}
        />
        <FormTextInput
          id="TCC"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 600, left: 800 }}
          width={80}
        />
        <FormTextInput
          id="FCD"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 585, left: 1000 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.sampleText}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 600, left: 1000 }}
          width={80}
        />
        <FormTextarea
          id="splnote"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 640, left: 480 }}
          width={590}
          height={70}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default Stellar_Cold;
