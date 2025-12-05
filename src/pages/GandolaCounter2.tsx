import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Gandola_Counter2_tmpt from "@/assets/Gandola_Counter2_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const GandolaCounter2 = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    SalesPerson :"",
    clientName : "",
    soNumber: "",
    date: new Date(),
    SOdate: "",
    qty8ft: "",
    qty10ft: "",
    qty12ft: "",
    "8ft": false,
    "10ft": false,
    "12ft": false,
    SNW: false,
    SWW: false,
    SCW: false,
    SKWW: false,
    SKNW: false,
    SKWW1: false,
    BackLight : false,
    NoBackLight: false,
    RGMatt: false,
    RGMirror: false,
    GMatt: false,
    GMirror: false,
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
      SalesPerson :"",
      clientName : "",
      soNumber: "",
      date: new Date(),
      SOdate: "",
      qty8ft: "",
      qty10ft: "",
      qty12ft: "",
      "8ft": false,
      "10ft": false,
      "12ft": false,
      SNW: false,
      SWW: false,
      SCW: false,
      SKWW: false,
      SKNW: false,
      SKWW1: false,
      BackLight : false,
      NoBackLight: false,
      RGMatt: false,
      RGMirror: false,
      GMatt: false,
      GMirror: false,
      TCC: "",
      TCD: "",
      sampleTextarea: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Gandola_Counter2_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Gandola Counter2 Template"
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
          id="8ft"
          checked={formData["8ft"]}
          onChange={(val) => handleFieldChange("8ft", val)}
          position={{ top: 433, left: 213 }}
        />
        <FormNumberInput
          id="qty8ft"
          value={formData.qty8ft}
          onChange={(val) => handleFieldChange("qty8ft", val)}
          position={{ top: 433, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="10ft"
          checked={formData["10ft"]}
          onChange={(val) => handleFieldChange("10ft", val)}
          position={{ top: 451, left: 213 }}
        />
        <FormNumberInput
          id="qty10ft"
          value={formData.qty10ft}
          onChange={(val) => handleFieldChange("qty10ft", val)}
          position={{ top: 453, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="12ft"
          checked={formData["12ft"]}
          onChange={(val) => handleFieldChange("12ft", val)}
          position={{ top: 470, left: 213 }}
        />
        <FormNumberInput
          id="qty12ft"
          value={formData.qty12ft}
          onChange={(val) => handleFieldChange("qty12ft", val)}
          position={{ top: 470, left: 233 }}
          width={80}
          placeholder="Qty"
        />
                
        <FormCheckbox
          id="SWW"
          checked={formData.SWW}
          onChange={(val) => handleFieldChange("SWW", val)}
          position={{ top: 433, left: 866 }}
        />
        
        <FormCheckbox
          id="SNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 452, left: 866 }}
        />
        <FormCheckbox
          id="SCW"
          checked={formData.SCW}
          onChange={(val) => handleFieldChange("SCW", val)}
          position={{ top: 470, left: 866 }}
        />
        <FormCheckbox
          id="SKWW"
          checked={formData.SKWW}
          onChange={(val) => handleFieldChange("SKWW", val)}
          position={{ top: 433, left: 980 }}
        />
        <FormCheckbox
          id="SKNW"
          checked={formData.SKNW}
          onChange={(val) => handleFieldChange("SKNW", val)}
          position={{ top: 452, left: 980 }}
        />
        <FormCheckbox
          id="SKWW1"
          checked={formData.SKWW1}
          onChange={(val) => handleFieldChange("SKWW1", val)}
          position={{ top: 470, left: 980 }}
        />
        <FormCheckbox
          id="BackLight"
          checked={formData.BackLight}
          onChange={(val) => handleFieldChange("BackLight", val)}
          position={{ top: 433, left: 1078 }}
        />
        <FormCheckbox
          id="NoBackLight"
          checked={formData.NoBackLight}
          onChange={(val) => handleFieldChange("NoBackLight", val)}
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
        
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 585, left: 840 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 602, left: 840 }}
          width={80}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 585, left: 940 }}
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

export default GandolaCounter2;
