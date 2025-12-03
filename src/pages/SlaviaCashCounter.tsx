import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Slavia_Cash_Counter_tmpt from "@/assets/Slavia_Cash_Counter_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const SlaviaCashCounter = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    clientName: "",
    SalesPerson: "",
    soNumber: "",
    date: new Date(),
    qty2ft: "",
    qty2_6ft: "",
    qty3ft: "",
    qty3_6ft: "",
    qty6ft: "",
    "2ft": false,
    "2_6ft": false,
    "3ft": false,
    "3_6ft": false,
    "4ft": false,
    CNW: false,
    SNW: false,
    DNW: false,
    CCW: false,
    SWW: false,
    DWW: false,
    CWheels: false,
    Alegs: false,
    Sheleves: false,
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
    FCC: "",
    TCC: "",
    FCD: "",
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
      SalesPerson: "",
      soNumber: "",
      date: new Date(),
      qty2ft: "",
      qty2_6ft: "",
      qty3ft: "",
      qty3_6ft: "",
      qty6ft: "",
      "2ft": false,
      "2_6ft": false,
      "3ft": false,
      "3_6ft": false,
      "4ft": false,
      CNW: false,
      SNW: false,
      DNW: false,
      CCW: false,
      SWW: false,
      DWW: false,
      DCW: false,
      CWheels: false,
      Alegs: false,
      Sheleves: false,
      Sheleves1: false,
      SSMatt: false,
      SSMirror: false,
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
      FCC: "",
      TCC: "",
      FCD: "",
      TCD: "",
      sampleTextarea: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Slavia_Cash_Counter_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Slavia Cash Counter Template"
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
          position={{ top: 753, left: 330 }}
          width={95}
          placeholder="SO Number"
        />
        <FormDatePicker
          id="date"
          value={formData.date}
          onChange={(val) => handleFieldChange("date", val)}
          position={{ top: 16, left: 395 }}
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
          value={formData.qty2ft}
          onChange={(val) => handleFieldChange("qty2ft", val)}
          position={{ top: 345, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="2_6ft"
          checked={formData["2_6ft"]}
          onChange={(val) => handleFieldChange("2_6ft", val)}
          position={{ top: 362, left: 225 }}
        />
        <FormNumberInput
          id="qty2_6ft"
          value={formData.qty2_6ft}
          onChange={(val) => handleFieldChange("qty2_6ft", val)}
          position={{ top: 362, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="3ft"
          checked={formData["3ft"]}
          onChange={(val) => handleFieldChange("3ft", val)}
          position={{ top: 382, left: 225 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 382, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="3_6ft"
          checked={formData["3_6ft"]}
          onChange={(val) => handleFieldChange("3_6ft", val)}
          position={{ top: 400, left: 225 }}
        />
        <FormNumberInput
          id="qty3_6ft"
          value={formData.qty3_6ft}
          onChange={(val) => handleFieldChange("qty3_6ft", val)}
          position={{ top: 400, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="4ft"
          checked={formData["4ft"]}
          onChange={(val) => handleFieldChange("4ft", val)}
          position={{ top: 418, left: 225 }}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 418, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        
        <FormCheckbox
          id="CNW"
          checked={formData.CNW}
          onChange={(val) => handleFieldChange("CNW", val)}
          position={{ top: 324, left: 816 }}
        />
        <FormCheckbox
          id="SNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 324, left: 960 }}
        />
        <FormCheckbox
          id="DNW"
          checked={formData.DNW}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 324, left: 1078 }}
        />
        <FormCheckbox
          id="CCW"
          checked={formData.CCW}
          onChange={(val) => handleFieldChange("CCW", val)}
          position={{ top: 346, left: 816 }}
        />
        <FormCheckbox
          id="SWW"
          checked={formData.SWW}
          onChange={(val) => handleFieldChange("SWW", val)}
          position={{ top: 344, left: 960 }}
        />
        <FormCheckbox
          id="DWW"
          checked={formData.DWW}
          onChange={(val) => handleFieldChange("DWW", val)}
          position={{ top: 346, left: 1078 }}
        />
        
        <FormCheckbox
          id="Sheleves"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 400, left: 816 }}
        />
        <FormCheckbox
          id="Sheleves1"
          checked={formData.Sheleves1}
          onChange={(val) => handleFieldChange("Sheleves1", val)}
          position={{ top: 418, left: 816 }}
        />
        <FormCheckbox
          id="RDrawer"
          checked={formData.RDrawer}
          onChange={(val) => handleFieldChange("RDrawer", val)}
          position={{ top: 400, left: 960 }}
        />
        <FormCheckbox
          id="SSDrawer"
          checked={formData.SSDrawer}
          onChange={(val) => handleFieldChange("SSDrawer", val)}
          position={{ top: 418, left: 960 }}
        />

        <FormCheckbox
          id="Alegs"
          checked={formData.Alegs}
          onChange={(val) => handleFieldChange("Alegs", val)}
          position={{ top: 455, left: 816 }}
        />
        <FormCheckbox
          id="CWheels"
          checked={formData.CWheels}
          onChange={(val) => handleFieldChange("CWheels", val)}
          position={{ top: 475, left: 816 }}
        />
        
        

        <FormCheckbox
          id="WireManager"
          checked={formData.WireManager}
          onChange={(val) => handleFieldChange("WireManager", val)}
          position={{ top: 382, left: 1078 }}
        />
        <FormCheckbox
          id="SSDoor"
          checked={formData.SSDoor}
          onChange={(val) => handleFieldChange("SSDoor", val)}
          position={{ top: 400, left: 1078 }}
        />
        <FormCheckbox
          id="WSSDoor"
          checked={formData.RGMatt}
          onChange={(val) => handleFieldChange("WSSDoor", val)}
          position={{ top: 418, left: 1078 }}
        />
        <FormCheckbox
          id="FLogo"
          checked={formData.FLogo}
          onChange={(val) => handleFieldChange("FLogo", val)}
          position={{ top: 436, left: 1078 }}
        />
        <FormCheckbox
          id="WithBacklight"
          checked={formData.WithBacklight}
          onChange={(val) => handleFieldChange("WithBacklight", val)}
          position={{ top: 455, left: 1078 }}
        />
        <FormCheckbox
          id="GMirror"
          checked={formData.GMirror}
          onChange={(val) => handleFieldChange("GMirror", val)}
          position={{ top: 473, left: 1078 }}
        />

        <FormCheckbox
          id="CF1"
          checked={formData.CF1}
          onChange={(val) => handleFieldChange("CF1", val)}
          position={{ top: 529, left: 848 }}
        />
        <FormCheckbox
          id="CF2"
          checked={formData.CF2}
          onChange={(val) => handleFieldChange("CF2", val)}
          position={{ top: 547, left: 848 }}
        />
        <FormCheckbox
          id="CF3"
          checked={formData.CF3}
          onChange={(val) => handleFieldChange("CF3", val)}
          position={{ top: 566, left: 848 }}
        />
        <FormCheckbox
          id="CF4"
          checked={formData.CF4}
          onChange={(val) => handleFieldChange("CF4", val)}
          position={{ top: 584, left: 848 }}
        />
        <FormCheckbox
          id="CF5"
          checked={formData.CF5}
          onChange={(val) => handleFieldChange("CF5", val)}
          position={{ top: 603, left: 848 }}
        />
        <FormCheckbox
          id="CT1"
          checked={formData.CT1}
          onChange={(val) => handleFieldChange("CT1", val)}
          position={{ top: 529, left: 887 }}
        />
        <FormCheckbox
          id="CT2"
          checked={formData.CT2}
          onChange={(val) => handleFieldChange("CT2", val)}
          position={{ top: 547, left: 887 }}
        />
        <FormCheckbox
          id="CT3"
          checked={formData.CT3}
          onChange={(val) => handleFieldChange("CT3", val)}
          position={{ top: 566, left: 887 }}
        />
        <FormCheckbox
          id="CT4"
          checked={formData.CT4}
          onChange={(val) => handleFieldChange("CT4", val)}
          position={{ top: 584, left: 887 }}
        />
        <FormCheckbox
          id="CT5"
          checked={formData.CT5}
          onChange={(val) => handleFieldChange("CT5", val)}
          position={{ top: 603, left: 887 }}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 540, left: 920 }}
          width={170}
          height={80}
          placeholder="Add Text"
        />
        <FormTextInput
          id="FCC"
          value={formData.FCC}
          onChange={(val) => handleFieldChange("FCC", val)}
          position={{ top: 623, left: 810 }}
          width={80}
        />
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 640, left: 810 }}
          width={80}
        />
        <FormTextInput
          id="FCD"
          value={formData.FCD}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 623, left: 1000 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 640, left: 1000 }}
          width={80}
        />
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 480, left: 30 }}
          width={670}
          height={230}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default SlaviaCashCounter;
