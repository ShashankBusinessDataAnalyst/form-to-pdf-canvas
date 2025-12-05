import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Gift_Rack1_tmpt from "@/assets/Gift_Rack1_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const GiftRack1 = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    SalesPerson: "",
    clientName: "",
    soNumber: "",
    date: new Date(),
    SOdate: "",
    qty3ft: "",
    qty4ft: "",
    qty5ft: "",
    qty6ft: "",
    qty8ft: "",
    "3ft": false,
    "4ft": false,
    "5ft": false,
    "6ft": false,
    "8ft": false,
    SNW: false,
    SCW: false,
    Door: false,
    Drawer: false,
    RGMatt: false,
    RGMirror: false,
    GMatt: false,
    GMirror: false,
    Shelves: false,
    Shelves1: false,
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
      SalesPerson: "",
      clientName: "",
      soNumber: "",
      date: new Date(),
      SOdate: "",
      qty3ft: "",
      qty4ft: "",
      qty5ft: "",
      qty6ft: "",
      qty8ft: "",
      "3ft": false,
      "4ft": false,
      "5ft": false,
      "6ft": false,
      "8ft": false,
      SNW: false,
      SCW: false,
      Door: false,
      Drawer: false,
      RGMatt: false,
      RGMirror: false,
      GMatt: false,
      GMirror: false,
      Shelves: false,
      Shelves1: false,
      TCC: "",
      TCD: "",
      sampleTextarea: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Gift_Rack1_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Gift Rack 1 Template"
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
          position={{ top: 18, left: 360 }}
        />
        <FormDatePicker
          id="SOdate"
          value={formData.SOdate}
          onChange={(val) => handleFieldChange("SOdate", val)}
          position={{ top: 750, left: 459 }}
        />
        <FormCheckbox
          id="3ft"
          checked={formData["3ft"]}
          onChange={(val) => handleFieldChange("3ft", val)}
          position={{ top: 433, left: 213 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 433, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="4ft"
          checked={formData["4ft"]}
          onChange={(val) => handleFieldChange("4ft", val)}
          position={{ top: 451, left: 213 }}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 453, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="5ft"
          checked={formData["5ft"]}
          onChange={(val) => handleFieldChange("5ft", val)}
          position={{ top: 470, left: 213 }}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty5ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 470, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="6ft"
          checked={formData["6ft"]}
          onChange={(val) => handleFieldChange("6ft", val)}
          position={{ top: 488, left: 213 }}
        />
        <FormNumberInput
          id="qty6ft"
          value={formData.qty6ft}
          onChange={(val) => handleFieldChange("qty6ft", val)}
          position={{ top: 488, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        
        <FormCheckbox
          id="SWW"
          checked={formData.SWW}
          onChange={(val) => handleFieldChange("SWW", val)}
          position={{ top: 433, left: 916 }}
        />
        
        <FormCheckbox
          id="SNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 452, left: 916 }}
        />
        <FormCheckbox
          id="SCW"
          checked={formData.SCW}
          onChange={(val) => handleFieldChange("SCW", val)}
          position={{ top: 470, left: 916 }}
        />
        <FormCheckbox
          id="Door"
          checked={formData.Door}
          onChange={(val) => handleFieldChange("Door", val)}
          position={{ top: 433, left: 1078 }}
        />
        <FormCheckbox
          id="Drawer"
          checked={formData.Drawer}
          onChange={(val) => handleFieldChange("Drawer", val)}
          position={{ top: 452, left: 1078 }}
        />
        
        <FormCheckbox
          id="RGMatt"
          checked={formData.RGMatt}
          onChange={(val) => handleFieldChange("RGMatt", val)}
          position={{ top: 508, left: 916 }}
        />
        <FormCheckbox
          id="RGMirror"
          checked={formData.RGMirror}
          onChange={(val) => handleFieldChange("RGMirror", val)}
          position={{ top: 508, left: 1080 }}
        />
        <FormCheckbox
          id="GMatt"
          checked={formData.GMatt}
          onChange={(val) => handleFieldChange("GMatt", val)}
          position={{ top: 525, left: 916 }}
        />
        <FormCheckbox
          id="GMirror"
          checked={formData.GMirror}
          onChange={(val) => handleFieldChange("GMirror", val)}
          position={{ top: 525, left: 1080 }}
        />
        <FormCheckbox
          id="Shelves"
          checked={formData.Shelves}
          onChange={(val) => handleFieldChange("Shelves", val)}
          position={{ top: 563, left: 916 }}
        />
        <FormCheckbox
          id="Shelves1"
          checked={formData.Shelves1}
          onChange={(val) => handleFieldChange("Shelves1", val)}
          position={{ top: 580, left: 916 }}
        />
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 620, left: 840 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 640, left: 840 }}
          width={80}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 620, left: 940 }}
          width={150}
          height={40}
          placeholder="Add Text"
        />
           
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 540, left: 30 }}
          width={730}
          height={170}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default GiftRack1;
