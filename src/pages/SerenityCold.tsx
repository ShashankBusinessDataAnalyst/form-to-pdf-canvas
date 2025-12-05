import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Serenity_Cold_tmpt from "@/assets/Serenity_Cold_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const SerenityCold = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    SalesPerson: "",
    clientName: "",
    soNumber: "",
    date: new Date(),
    SOdate: "",
    qty5ft: "",
    qty7ft: "",
    "5ft": false,
    "7ft": false,
    CNW: false,
    CCW: false,
    INGS: false,
    INCS: false,
    Alegs: false,
    Sheleves: false,
    Sheleves1: false,
    SSMatt: false,
    SSMirror: false,
    RGMatt: false,
    RGMirror: false,
    GMatt: false,
    GMirror: false,
    CF1: false,
    CF2: false,
    CF3: false,
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
      qty5ft: "",
      qty7ft: "",
      "5ft": false,
      "7ft": false,
      CNW: false,
      CCW: false,
      INGS: false,
      INCS: false,
      Alegs: false,
      Sheleves: false,
      Sheleves1: false,
      SSMatt: false,
      SSMirror: false,
      RGMatt: false,
      RGMirror: false,
      GMatt: false,
      GMirror: false,
      CF1: false,
      CF2: false,
      CF3: false,
      sampleTextarea: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Serenity_Cold_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Serenity Cold Template"
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
          position={{ top: 19, left: 330 }}
        />
        <FormDatePicker
          id="SOdate"
          value={formData.SOdate}
          onChange={(val) => handleFieldChange("SOdate", val)}
          position={{ top: 750, left: 459 }}
        />
        <FormCheckbox
          id="5ft"
          checked={formData["5ft"]}
          onChange={(val) => handleFieldChange("5ft", val)}
          position={{ top: 343, left: 225 }}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty5ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 346, left: 250 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="7ft"
          checked={formData["7ft"]}
          onChange={(val) => handleFieldChange("7ft", val)}
          position={{ top: 362, left: 225 }}
        />
        <FormNumberInput
          id="qty7ft"
          value={formData.qty7ft}
          onChange={(val) => handleFieldChange("qty7ft", val)}
          position={{ top: 364, left: 250 }}
          width={80}
          placeholder="Qty"
        />
        
        
        <FormCheckbox
          id="CNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 325, left: 887 }}
        />     
        <FormCheckbox
          id="CCW"
          checked={formData.CCW}
          onChange={(val) => handleFieldChange("CCW", val)}
          position={{ top: 345, left: 887 }}
        />
        <FormCheckbox
          id="INGS"
          checked={formData.INGS}
          onChange={(val) => handleFieldChange("INGS", val)}
          position={{ top: 325, left: 1078 }}
        />
        <FormCheckbox
          id="INCS"
          checked={formData.INCS}
          onChange={(val) => handleFieldChange("INCS", val)}
          position={{ top: 345, left: 1078 }}
        />

        <FormCheckbox
          id="Alegs"
          checked={formData.Alegs}
          onChange={(val) => handleFieldChange("Alegs", val)}
          position={{ top: 400, left: 805 }}
        />
        <FormCheckbox
          id="Sheleves"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 399, left: 922 }}
        />
        <FormCheckbox
          id="Sheleves1"
          checked={formData.Sheleves1}
          onChange={(val) => handleFieldChange("Sheleves1", val)}
          position={{ top: 418, left: 922 }}
        />

        <FormCheckbox
          id="SSMatt"
          checked={formData.SSMatt}
          onChange={(val) => handleFieldChange("SSMatt", val)}
          position={{ top: 399, left: 999 }}
        />
        <FormCheckbox
          id="SSMirror"
          checked={formData.SSMirror}
          onChange={(val) => handleFieldChange("SSMirror", val)}
          position={{ top: 399, left: 1078 }}
        />
        <FormCheckbox
          id="RGMatt"
          checked={formData.RGMatt}
          onChange={(val) => handleFieldChange("RGMatt", val)}
          position={{ top: 418, left: 999 }}
        />
        <FormCheckbox
          id="RGMirror"
          checked={formData.RGMirror}
          onChange={(val) => handleFieldChange("RGMirror", val)}
          position={{ top: 418, left: 1078 }}
        />
        <FormCheckbox
          id="GMatt"
          checked={formData.GMatt}
          onChange={(val) => handleFieldChange("GMatt", val)}
          position={{ top: 437, left: 999 }}
        />
        <FormCheckbox
          id="GMirror"
          checked={formData.GMirror}
          onChange={(val) => handleFieldChange("GMirror", val)}
          position={{ top: 437, left: 1078 }}
        />

        <FormCheckbox
          id="CF1"
          checked={formData.CF1}
          onChange={(val) => handleFieldChange("CF1", val)}
          position={{ top: 492, left: 848 }}
        />
        <FormCheckbox
          id="CF2"
          checked={formData.CF2}
          onChange={(val) => handleFieldChange("CF2", val)}
          position={{ top: 510, left: 848 }}
        />
        <FormCheckbox
          id="CF3"
          checked={formData.CF3}
          onChange={(val) => handleFieldChange("CF3", val)}
          position={{ top: 528, left: 848 }}
        />
        
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 495, left: 880 }}
          width={215}
          height={55}
          placeholder="Add Text"
        />
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 520, left: 30 }}
          width={680}
          height={190}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default SerenityCold;
