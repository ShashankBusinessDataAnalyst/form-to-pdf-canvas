import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Shannalle_Outter_Corner_Counter_tmpt from "@/assets/Shannalle_Outter_Corner_Counter_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const ShannalleOutterCornerCounter = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    SalesPerson: "",
    clientName: "",
    soNumber: "",
    date: new Date(),
    SOdate:"",
    qty2_6ft: "",
    "2_6ft": false,
    SNW: false,
    SWW: false,
    DNW: false,
    DWW: false,
    Sheleves: false,
    Sheleves1: false,
    Alegs: false,
    SSMatt: false,
    SSMirror: false,
    RGMatt: false,
    RGMirror: false,
    GMatt: false,
    GMirror: false,
    CF1: false,
    CF2: false,
    CF3: false,
    CF4: false,
    CF5: false,
    CT1: false,
    CT2: false,
    CT3: false,
    CT4: false,
    CT5: false,
    sampleTextarea: "",
    FCC: "",
    TCC: "",
    FCD: "",
    TCD: "",
    splnote: "",
  });

  const handleFieldChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClearAll = () => {
    setFormData({
      clientName: "",
      SalesPerson: "",
      soNumber: "",
      date: new Date(),
      SOdate:"",
      qty2_6ft: "",
      "2_6ft": false,
      Sheleves: false,
      Sheleves1: false,
      Sheleves2: false,
      Wheels: false,
      Alegs: false,
      WireManager: false,
      SSMatt: false,
      SSMirror: false,
      RGMatt: false,
      RGMirror: false,
      GMatt: false,
      GMirror: false,
      sampleTextarea: "",
      FCC: "",
      TCC: "",
      FCD: "",
      TCD: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Shannalle_Outter_Corner_Counter_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Shannalle Outter Corner Counter Template"
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
          position={{ top: 19, left: 399 }}
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
          position={{ top: 435, left: 225 }}
        />
        <FormNumberInput
          id="qty2_6ft"
          value={formData.qty2_6ft}
          onChange={(val) => handleFieldChange("qty2_6ft", val)}
          position={{ top: 435, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="SNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 415, left: 812 }}
        />
        <FormCheckbox
          id="SWW"
          checked={formData.SWW}
          onChange={(val) => handleFieldChange("SWW", val)}
          position={{ top: 434, left: 812 }}
        />
        <FormCheckbox
          id="DNW"
          checked={formData.DNW}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 415, left: 958 }}
        />
        <FormCheckbox
          id="DWW"
          checked={formData.DWW}
          onChange={(val) => handleFieldChange("DWW", val)}
          position={{ top: 434, left: 958 }}
        />
        
        <FormCheckbox
          id="Sheleves"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 415, left: 1080 }}
        />
        <FormCheckbox
          id="Sheleves1"
          checked={formData.Sheleves1}
          onChange={(val) => handleFieldChange("Sheleves1", val)}
          position={{ top: 434, left: 1080 }}
        />
        
        <FormCheckbox
          id="Alegs"
          checked={formData.Alegs}
          onChange={(val) => handleFieldChange("Alegs", val)}
          position={{ top: 488, left: 812 }}
        />
        <FormCheckbox
          id="SSMatt"
          checked={formData.SSMatt}
          onChange={(val) => handleFieldChange("SSMatt", val)}
          position={{ top: 488, left: 958 }}
        />
        <FormCheckbox
          id="SSMirror"
          checked={formData.SSMirror}
          onChange={(val) => handleFieldChange("SSMirror", val)}
          position={{ top: 488, left: 1080 }}
        />
        <FormCheckbox
          id="RGMatt"
          checked={formData.RGMatt}
          onChange={(val) => handleFieldChange("RGMatt", val)}
          position={{ top: 508, left: 958 }}
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
          position={{ top: 525, left: 958 }}
        />
        <FormCheckbox
          id="GMirror"
          checked={formData.GMirror}
          onChange={(val) => handleFieldChange("GMirror", val)}
          position={{ top: 525, left: 1080 }}
        />
        
        <FormCheckbox
          id="CF1"
          checked={formData.CF1}
          onChange={(val) => handleFieldChange("CF1", val)}
          position={{ top: 581, left: 845 }}
        />
        <FormCheckbox
          id="CF2"
          checked={formData.CF2}
          onChange={(val) => handleFieldChange("CF2", val)}
          position={{ top: 599, left: 845 }}
        />
        <FormCheckbox
          id="CF3"
          checked={formData.CF3}
          onChange={(val) => handleFieldChange("CF3", val)}
          position={{ top: 618, left: 845 }}
        />
        <FormCheckbox
          id="CF4"
          checked={formData.CF4}
          onChange={(val) => handleFieldChange("CF4", val)}
          position={{ top: 638, left: 845 }}
        />
        <FormCheckbox
          id="CF5"
          checked={formData.CF5}
          onChange={(val) => handleFieldChange("CF5", val)}
          position={{ top: 655, left: 845 }}
        />
        <FormCheckbox
          id="CT1"
          checked={formData.CT1}
          onChange={(val) => handleFieldChange("CT1", val)}
          position={{ top: 581, left: 883 }}
        />
        <FormCheckbox
          id="CT2"
          checked={formData.CT2}
          onChange={(val) => handleFieldChange("CT2", val)}
          position={{ top: 599, left: 883 }}
        />
        <FormCheckbox
          id="CT3"
          checked={formData.CT3}
          onChange={(val) => handleFieldChange("CT3", val)}
          position={{ top: 618, left: 883 }}
        />
        <FormCheckbox
          id="CT4"
          checked={formData.CT4}
          onChange={(val) => handleFieldChange("CT4", val)}
          position={{ top: 638, left: 883 }}
        />
        <FormCheckbox
          id="CT5"
          checked={formData.CT5}
          onChange={(val) => handleFieldChange("CT5", val)}
          position={{ top: 655, left: 883 }}
        />
        
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 585, left: 920 }}
          width={170}
          height={80}
          placeholder="Add Text"
        />
        <FormTextInput
          id="FCC"
          value={formData.FCC}
          onChange={(val) => handleFieldChange("FCC", val)}
          position={{ top: 678, left: 810 }}
          width={80}
        />
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 696, left: 810 }}
          width={80}
        />
        <FormTextInput
          id="FCD"
          value={formData.FCD}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 678, left: 1000 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 696, left: 1000 }}
          width={80}
        />
        
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 500, left: 30 }}
          width={680}
          height={205}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default ShannalleOutterCornerCounter;
