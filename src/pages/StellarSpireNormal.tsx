import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Stellar_Spire_Normal_tmpt from "@/assets/Stellar_Spire_Normal_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const StellarSpireNormal = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    clientName: "",
    soNumber: "",
    date: new Date(),
    qty3ft: "",
    qty4ft: "",
    qty5ft: "",
    qty6ft: "",
    "3ft": false,
    "4ft": false,
    "5ft": false,
    "6ft": false,
    CNW: false,
    SNW: false,
    DNW: false,
    CCW: false,
    SWW: false,
    DWW: false,
    wheels: false,
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
      soNumber: "",
      date: new Date(),
      qty3ft: "",
      qty4ft: "",
      qty5ft: "",
      qty6ft: "",
      "3ft": false,
      "4ft": false,
      CNW: false,
      SNW: false,
      DNW: false,
      CCW: false,
      SWW: false,
      DWW: false,
      wheels: false,
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
      Sheleves1: false,
      sampleTextarea: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Stellar_Spire_Normal_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Stellar Sprire Normal Template"
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
          checked={formData["3ft"]}
          onChange={(val) => handleFieldChange("3ft", val)}
          position={{ top: 363, left: 225 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 363, left: 260 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="4ft"
          checked={formData["4ft"]}
          onChange={(val) => handleFieldChange("4ft", val)}
          position={{ top: 382, left: 225 }}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 382, left: 260 }}
          width={80}
          placeholder="Qty"
        />
        

        <FormCheckbox
          id="CNW"
          checked={formData.CNW}
          onChange={(val) => handleFieldChange("CNW", val)}
          position={{ top: 363, left: 815 }}
        />
        <FormCheckbox
          id="SNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 363, left: 935 }}
        />
        <FormCheckbox
          id="DNW"
          checked={formData.DNW}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 363, left: 1078 }}
        />
        <FormCheckbox
          id="CCW"
          checked={formData.CCW}
          onChange={(val) => handleFieldChange("CCW", val)}
          position={{ top: 382, left: 815 }}
        />
        <FormCheckbox
          id="SWW"
          checked={formData.SWW}
          onChange={(val) => handleFieldChange("SWW", val)}
          position={{ top: 382, left: 935 }}
        />
        <FormCheckbox
          id="DWW"
          checked={formData.DWW}
          onChange={(val) => handleFieldChange("DWW", val)}
          position={{ top: 382, left: 1078 }}
        />

        <FormCheckbox
          id="wheels"
          checked={formData.wheels}
          onChange={(val) => handleFieldChange("wheels", val)}
          position={{ top: 438, left: 888 }}
        />
         <FormCheckbox
          id="Alegs"
          checked={formData.Alegs}
          onChange={(val) => handleFieldChange("Alegs", val)}
          position={{ top: 455, left: 888 }}
        />
        <FormCheckbox
          id="Sheleves"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 438, left: 1078 }}
        />
        <FormCheckbox
          id="Sheleves1"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves1", val)}
          position={{ top: 455, left: 1078 }}
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
          position={{ top: 548, left: 848 }}
        />
        <FormCheckbox
          id="CF3"
          checked={formData.CF3}
          onChange={(val) => handleFieldChange("CF3", val)}
          position={{ top: 567, left: 848 }}
        />
        <FormCheckbox
          id="CF4"
          checked={formData.CF4}
          onChange={(val) => handleFieldChange("CF4", val)}
          position={{ top: 585, left: 848 }}
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
          position={{ top: 529, left: 890 }}
        />
        <FormCheckbox
          id="CT2"
          checked={formData.CT2}
          onChange={(val) => handleFieldChange("CT2", val)}
          position={{ top: 548, left: 890 }}
        />
        <FormCheckbox
          id="CT3"
          checked={formData.CT3}
          onChange={(val) => handleFieldChange("CT3", val)}
          position={{ top: 567, left: 890 }}
        />
        <FormCheckbox
          id="CT4"
          checked={formData.CT4}
          onChange={(val) => handleFieldChange("CT4", val)}
          position={{ top: 585, left: 890 }}
        />
        <FormCheckbox
          id="CT5"
          checked={formData.CT5}
          onChange={(val) => handleFieldChange("CT5", val)}
          position={{ top: 603, left: 890 }}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 535, left: 920 }}
          width={170}
          height={80}
          placeholder="Add Text"
        />
        <FormTextInput
          id="FCC"
          value={formData.FCC}
          onChange={(val) => handleFieldChange("FCC", val)}
          position={{ top: 624, left: 800 }}
          width={100}
        />
        
        <FormTextInput
          id="FCD"
          value={formData.FCD}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 624, left: 1000 }}
          width={100}
        />
        
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 650, left: 360 }}
          width={690}
          height={58}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default StellarSpireNormal;
