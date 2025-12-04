import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Shantel_Inner_Corner_Counter_tmpt from "@/assets/Shantel_Inner_Corner_Counter_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const ShantelInnerCornerCounter = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    SalesPerson:"",
    clientName: "",
    soNumber: "",
    date: new Date(),
    SODate: "",
    qty2_6ft: "",
    "2_6ft": false,
    Sheleves: false,
    Sheleves1: false,
    WireManager: false,
    SSDoor: false,
    WSSDoor: false,
    sampleTextarea: "",
    TCC: "",
    TCD: "",
    splnote: "",
  });

  const handleFieldChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClearAll = () => {
    setFormData({
      SalesPerson:"",
      clientName: "",
      soNumber: "",
      date: new Date(),
      SODate: "",
      qty2_6ft: "",
      "2_6ft": false,
      Sheleves: false,
      Sheleves1: false,
      WireManager: false,
      SSDoor: false,
      WSSDoor: false,
      sampleTextarea: "",
      TCC: "",
      TCD: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Shantel_Inner_Corner_Counter_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Shantel Inner Corner Counter Template"
        onClearAll={handleClearAll}
      >
        <FormTextInput
          id="SalesPerson"
          value={formData.SalesPerson}
          onChange={(val) => handleFieldChange("SalesPerson", val)}
          position={{ top: 21, left: 920 }}
          width={150}
          placeholder="Sales Person"
        />
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
          position={{ top: 19, left: 340 }}
        />
        <FormDatePicker
          id="SOdate"
          value={formData.SOdate}
          onChange={(val) => handleFieldChange("SOdate", val)}
          position={{ top: 750, left: 470 }}
        />
        
        <FormCheckbox
          id="2_6ft"
          checked={formData["2_6ft"]}
          onChange={(val) => handleFieldChange("2_6ft", val)}
          position={{ top: 345, left: 225 }}
        />
        <FormNumberInput
          id="qty2_6ft"
          value={formData.qty2_6ft}
          onChange={(val) => handleFieldChange("qty2_6ft", val)}
          position={{ top: 347, left: 245 }}
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
          id="WireManager"
          checked={formData.WireManager}
          onChange={(val) => handleFieldChange("WireManager", val)}
          position={{ top: 326, left: 1078 }}
        />
        <FormCheckbox
          id="SSDoor"
          checked={formData.SSDoor}
          onChange={(val) => handleFieldChange("SSDoor", val)}
          position={{ top: 345, left: 1078 }}
        />
        <FormCheckbox
          id="WSSDoor"
          checked={formData.WSSDoor}
          onChange={(val) => handleFieldChange("WSSDoor", val)}
          position={{ top: 363, left: 1078 }}
        />
        
        <FormTextInput
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 421, left: 980 }}
          width={100}
        />
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 421, left: 723 }}
          width={100}
        />
        
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 421, left: 850 }}
          width={100}
        />
        
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 445, left: 30 }}
          width={1050}
          height={265}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default ShantelInnerCornerCounter;
