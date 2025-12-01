import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Silya_Corner_Counter_tmpt from "@/assets/Silya_Corner_Counter_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const SilyaCornerCounter = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    clientName: "",
    soNumber: "",
    date: new Date(),
    qty2ft: "",
    "2ft": false,
    WireManager: false,
    wheels: false,
    ALegs: false,
    Sheleves: false,
    Sheleves1: false,
    Refd : "",
    TCC: "",
    TCD: "",
    sampleTextarea: "",
    splnote: "",
  });

  const handleFieldChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClearAll = () => {
    setFormData({
    clientName: "",
    soNumber: "",
    date: new Date(),
    qty2ft: "",
    "2ft": false,
    WireManager: false,
    wheels: false,
    ALegs: false,
    Sheleves: false,
    Sheleves1: false,
    Refd : "",
    TCC: "",
    TCD: "",
    sampleTextarea: "",
    splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Silya_Corner_Counter_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Silya Corner Counter Template"
        onClearAll={handleClearAll}
      >
        <FormTextInput
          id="clientName"
          value={formData.clientName}
          onChange={(val) => handleFieldChange("clientName", val)}
          position={{ top: 735, left: 360 }}
          width={300}
          placeholder="Client Name"
        />
        <FormTextInput
          id="soNumber"
          value={formData.soNumber}
          onChange={(val) => handleFieldChange("soNumber", val)}
          position={{ top: 752, left: 330 }}
          width={95}
          placeholder="SO Number"
        />
        <FormDatePicker
          id="date"
          value={formData.date}
          onChange={(val) => handleFieldChange("date", val)}
          position={{ top: 19, left: 335 }}
        />
        <FormDatePicker
          id="SOdate"
          value={formData.SOdate}
          onChange={(val) => handleFieldChange("SOdate", val)}
          position={{ top: 750, left: 459 }}
        />
        <FormCheckbox
          id="2ft"
          checked={formData["2ft"]}
          onChange={(val) => handleFieldChange("2ft", val)}
          position={{ top: 345, left: 225 }}
        />
        <FormNumberInput
          id="qty2ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty2ft", val)}
          position={{ top: 345, left: 250 }}
          width={80}
          placeholder="Qty"
        />
       
        <FormCheckbox
          id="Sheleves"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 326, left: 888 }}
        />
        <FormCheckbox
          id="Sheleves1"
          checked={formData.Sheleves1}
          onChange={(val) => handleFieldChange("Sheleves1", val)}
          position={{ top: 345, left: 888 }}
        />
        
        <FormCheckbox
          id="ALegs"
          checked={formData.ALegs}
          onChange={(val) => handleFieldChange("ALegs", val)}
          position={{ top: 326, left: 1078 }}
        />
        <FormCheckbox
          id="Wheels"
          checked={formData.Wheels}
          onChange={(val) => handleFieldChange("Wheels", val)}
          position={{ top: 345, left: 1078 }}
        />
        <FormCheckbox
          id="WireManager"
          checked={formData.WireManager}
          onChange={(val) => handleFieldChange("WireManager", val)}
          position={{ top: 363, left: 1078 }}
        />

        
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 419, left: 730 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 419, left: 850 }}
          width={100}
        />
        <FormTextInput
          id="Refd"
          value={formData.Refd}
          onChange={(val) => handleFieldChange("Refd", val)}
          position={{ top: 419, left: 980 }}
          width={100}
        />
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 440, left: 30 }}
          width={1050}
          height={270}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default SilyaCornerCounter;
