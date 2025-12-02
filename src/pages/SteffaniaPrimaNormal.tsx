import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Steffania_Prima_Normal_tmpt from "@/assets/Steffania_Prima_Normal_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.



const SteffaniaPrimaNormal = () => {
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
    SalesPerson: "",
    CNW: false,
    SNW: false,
    DNW: false,
    CCW: false,
    SWW: false,
    DWW: false,
    DCW: false,
    wheels: false,
    Alegs: false,
    Sheleves: false,
    Sheleves1: false,
    Sheleves2: false,
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
      "5ft": false,
      "6ft": false,
      SalesPerson: "",
      CNW: false,
      SNW: false,
      DNW: false,
      CCW: false,
      SWW: false,
      DWW: false,
      DCW: false,
      wheels: false,
      Alegs: false,
      Sheleves: false,
      Sheleves1: false,
      Sheleves2: false,
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
        templateImage={Steffania_Prima_Normal_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Steffania Prima Normal Template"
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
          position={{ top: 18, left: 427 }}
        />
        <FormDatePicker
          id="SOdate"
          value={formData.SOdate}
          onChange={(val) => handleFieldChange("SOdate", val)}
          position={{ top: 750, left: 459 }}
        />
        <FormTextInput
          id="SalesPerson"
          value={formData.SalesPerson}
          onChange={(val) => handleFieldChange("SalesPerson", val)}
          position={{ top: 23, left: 925 }}
          width={150}
          placeholder="Sales Person"
        />
        <FormCheckbox
          id="3ft"
          checked={formData["3ft"]}
          onChange={(val) => handleFieldChange("3ft", val)}
          position={{ top: 343, left: 225 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 344, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="4ft"
          checked={formData["4ft"]}
          onChange={(val) => handleFieldChange("4ft", val)}
          position={{ top: 361, left: 225 }}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 362, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="5ft"
          checked={formData["5ft"]}
          onChange={(val) => handleFieldChange("5ft", val)}
          position={{ top: 381, left: 225 }}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty5ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 380, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="6ft"
          checked={formData["6ft"]}
          onChange={(val) => handleFieldChange("6ft", val)}
          position={{ top: 399, left: 225 }}
        />
        <FormNumberInput
          id="qty6ft"
          value={formData.qty6ft}
          onChange={(val) => handleFieldChange("qty6ft", val)}
          position={{ top: 400, left: 245 }}
          width={80}
          placeholder="Qty"
        />

        <FormCheckbox
          id="CNW"
          checked={formData.CNW}
          onChange={(val) => handleFieldChange("CNW", val)}
          position={{ top: 325, left: 815 }}
        />
        <FormCheckbox
          id="SNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 325, left: 935 }}
        />
        <FormCheckbox
          id="DNW"
          checked={formData.DNW}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 325, left: 1078 }}
        />
        <FormCheckbox
          id="CCW"
          checked={formData.CCW}
          onChange={(val) => handleFieldChange("CCW", val)}
          position={{ top: 345, left: 815 }}
        />
        <FormCheckbox
          id="SWW"
          checked={formData.SWW}
          onChange={(val) => handleFieldChange("SWW", val)}
          position={{ top: 345, left: 935 }}
        />
        <FormCheckbox
          id="DWW"
          checked={formData.DWW}
          onChange={(val) => handleFieldChange("DWW", val)}
          position={{ top: 345, left: 1078 }}
        />
        <FormCheckbox
          id="DCW"
          checked={formData.DCW}
          onChange={(val) => handleFieldChange("DCW", val)}
          position={{ top: 362, left: 1078 }}
        />
        <FormCheckbox
          id="Wheels"
          checked={formData.Wheels}
          onChange={(val) => handleFieldChange("Wheels", val)}
          position={{ top: 400, left: 815 }}
        />
        <FormCheckbox
          id="Alegs"
          checked={formData.Alegs}
          onChange={(val) => handleFieldChange("Alegs", val)}
          position={{ top: 418, left: 815 }}
        />
        <FormCheckbox
          id="Sheleves"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 399, left: 937 }}
        />
        <FormCheckbox
          id="Sheleves1"
          checked={formData.Sheleves1}
          onChange={(val) => handleFieldChange("Sheleves1", val)}
          position={{ top: 418, left: 937 }}
        />

        <FormCheckbox
          id="Sheleves2"
          checked={formData.Sheleves2}
          onChange={(val) => handleFieldChange("Sheleves2", val)}
          position={{ top: 436, left: 937 }}
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
        <FormCheckbox
          id="CF4"
          checked={formData.CF4}
          onChange={(val) => handleFieldChange("CF4", val)}
          position={{ top: 548, left: 848 }}
        />
        <FormCheckbox
          id="CF5"
          checked={formData.CF5}
          onChange={(val) => handleFieldChange("CF5", val)}
          position={{ top: 566, left: 848 }}
        />
        <FormCheckbox
          id="CT1"
          checked={formData.CT1}
          onChange={(val) => handleFieldChange("CT1", val)}
          position={{ top: 492, left: 899 }}
        />
        <FormCheckbox
          id="CT2"
          checked={formData.CT2}
          onChange={(val) => handleFieldChange("CT2", val)}
          position={{ top: 510, left: 899 }}
        />
        <FormCheckbox
          id="CT3"
          checked={formData.CT3}
          onChange={(val) => handleFieldChange("CT3", val)}
          position={{ top: 528, left: 899 }}
        />
        <FormCheckbox
          id="CT4"
          checked={formData.CT4}
          onChange={(val) => handleFieldChange("CT4", val)}
          position={{ top: 548, left: 899 }}
        />
        <FormCheckbox
          id="CT5"
          checked={formData.CT5}
          onChange={(val) => handleFieldChange("CT5", val)}
          position={{ top: 566, left: 899 }}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 500, left: 940 }}
          width={150}
          height={80}
          placeholder="Add Text"
        />
        <FormTextInput
          id="FCC"
          value={formData.FCC}
          onChange={(val) => handleFieldChange("FCC", val)}
          position={{ top: 588, left: 820 }}
          width={80}
        />
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 607, left: 820 }}
          width={80}
        />
        <FormTextInput
          id="FCD"
          value={formData.FCD}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 588, left: 1000 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 607, left: 1000 }}
          width={80}
        />
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 535, left: 30 }}
          width={680}
          height={170}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default SteffaniaPrimaNormal;
