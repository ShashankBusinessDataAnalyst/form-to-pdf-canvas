import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Shannalle_PickUp_and_Delivery_Counter_tmpt from "@/assets/Shannalle_PickUp_and_Delivery_Counter_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const ShannallePickUpDeliveryCounter = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    SalesPerson: "",
    clientName: "",
    soNumber: "",
    date: new Date(),
    SODate:"",
    qty2ft: "",
    qty3ft: "",
    qty4ft: "",
    qty5ft: "",
    "2ft": false,
    "3ft": false,
    "4ft": false,
    "5ft": false,
    CNW: false,
    SNW: false,
    DNW: false,
    CCW: false,
    SWW: false,
    DWW: false,
    Sheleves: false,
    Sheleves1: false,
    RDRW: false,
    SSDRW: false,
    WireManager: false,
    SSDoor: false,
    WSSDoor: false,
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
    CS1: false,
    CS2: false,
    CS3: false,
    CS4: false,
    CS5: false,
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
      SalesPerson: "",
      clientName: "",
      soNumber: "",
      date: new Date(),
      SODate:"",
      qty2ft: "",
      qty3ft: "",
      qty4ft: "",
      qty5ft: "",
      "2ft": false,
      "3ft": false,
      "4ft": false,
      "5ft": false,
      CNW: false,
      SNW: false,
      DNW: false,
      CCW: false,
      SWW: false,
      DWW: false,
      Sheleves: false,
      Sheleves1: false,
      RDRW: false,
      SSDRW: false,
      WireManager: false,
      SSDoor: false,
      WSSDoor: false,
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
      CS1: false,
      CS2: false,
      CS3: false,
      CS4: false,
      CS5: false,
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
        templateImage={Shannalle_PickUp_and_Delivery_Counter_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Shannalle PickUp and Delivery Counter Template"
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
          position={{ top: 19, left: 390 }}
        />
        <FormDatePicker
          id="SOdate"
          value={formData.SOdate}
          onChange={(val) => handleFieldChange("SOdate", val)}
          position={{ top: 750, left: 470 }}
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
          id="3ft"
          checked={formData["3ft"]}
          onChange={(val) => handleFieldChange("3ft", val)}
          position={{ top: 362, left: 225 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 362, left: 245 }}
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
          position={{ top: 382, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="5t"
          checked={formData["5ft"]}
          onChange={(val) => handleFieldChange("5ft", val)}
          position={{ top: 400, left: 225 }}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty5ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 400, left: 245 }}
          width={80}
          placeholder="Qty"
        />
        

        <FormCheckbox
          id="CNW"
          checked={formData.CNW}
          onChange={(val) => handleFieldChange("CNW", val)}
          position={{ top: 327, left: 815 }}
        />
        <FormCheckbox
          id="SNW"
          checked={formData.SNW}
          onChange={(val) => handleFieldChange("SNW", val)}
          position={{ top: 327, left: 958 }}
        />
        <FormCheckbox
          id="DNW"
          checked={formData.DNW}
          onChange={(val) => handleFieldChange("DNW", val)}
          position={{ top: 327, left: 1078 }}
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
          position={{ top: 345, left: 958 }}
        />
        <FormCheckbox
          id="DWW"
          checked={formData.DWW}
          onChange={(val) => handleFieldChange("DWW", val)}
          position={{ top: 345, left: 1078 }}
        />

        <FormCheckbox
          id="Sheleves"
          checked={formData.Sheleves}
          onChange={(val) => handleFieldChange("Sheleves", val)}
          position={{ top: 418, left: 815 }}
        />
        <FormCheckbox
          id="Sheleves1"
          checked={formData.Sheleves1}
          onChange={(val) => handleFieldChange("Sheleves1", val)}
          position={{ top: 399, left: 815 }}
        />

        <FormCheckbox
          id="RDRW"
          checked={formData.RDRW}
          onChange={(val) => handleFieldChange("RDRW", val)}
          position={{ top: 399, left: 958 }}
        />
        <FormCheckbox
          id="SSDRW"
          checked={formData.SSDRW}
          onChange={(val) => handleFieldChange("SSDRW", val)}
          position={{ top: 418, left: 958 }}
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
          position={{ top: 399, left: 1078 }}
        />
        <FormCheckbox
          id="WSSDoor"
          checked={formData.WSSDoor}
          onChange={(val) => handleFieldChange("WSSDoor", val)}
          position={{ top: 418, left: 1078 }}
        />
         <FormCheckbox
          id="SSMatt"
          checked={formData.SSMatt}
          onChange={(val) => handleFieldChange("SSMatt", val)}
          position={{ top: 455, left: 985 }}
        />
        <FormCheckbox
          id="SSMirror"
          checked={formData.SSMirror}
          onChange={(val) => handleFieldChange("SSMirror", val)}
          position={{ top: 455, left: 1080 }}
        />
        <FormCheckbox
          id="RGMatt"
          checked={formData.RGMatt}
          onChange={(val) => handleFieldChange("RGMatt", val)}
          position={{ top: 474, left: 985 }}
        />
        <FormCheckbox
          id="RGMirror"
          checked={formData.RGMirror}
          onChange={(val) => handleFieldChange("RGMirror", val)}
          position={{ top: 474, left: 1080 }}
        />
        <FormCheckbox
          id="GMatt"
          checked={formData.GMatt}
          onChange={(val) => handleFieldChange("GMatt", val)}
          position={{ top: 492, left: 985 }}
        />
        <FormCheckbox
          id="GMirror"
          checked={formData.GMirror}
          onChange={(val) => handleFieldChange("GMirror", val)}
          position={{ top: 492, left: 1080 }}
        />

        
        <FormCheckbox
          id="CF1"
          checked={formData.CF1}
          onChange={(val) => handleFieldChange("CF1", val)}
          position={{ top: 546, left: 848 }}
        />
        <FormCheckbox
          id="CF2"
          checked={formData.CF2}
          onChange={(val) => handleFieldChange("CF2", val)}
          position={{ top: 565, left: 848 }}
        />
        <FormCheckbox
          id="CF3"
          checked={formData.CF3}
          onChange={(val) => handleFieldChange("CF3", val)}
          position={{ top: 585, left: 848 }}
        />
        <FormCheckbox
          id="CF4"
          checked={formData.CF4}
          onChange={(val) => handleFieldChange("CF4", val)}
          position={{ top: 602, left: 848 }}
        />
        <FormCheckbox
          id="CF5"
          checked={formData.CF5}
          onChange={(val) => handleFieldChange("CF5", val)}
          position={{ top: 620, left: 848 }}
        />
        <FormCheckbox
          id="CT1"
          checked={formData.CT1}
          onChange={(val) => handleFieldChange("CT1", val)}
          position={{ top: 546, left: 890 }}
        />
        <FormCheckbox
          id="CT2"
          checked={formData.CT2}
          onChange={(val) => handleFieldChange("CT2", val)}
          position={{ top: 565, left: 890 }}
        />
        <FormCheckbox
          id="CT3"
          checked={formData.CT3}
          onChange={(val) => handleFieldChange("CT3", val)}
          position={{ top: 585, left: 890 }}
        />
        <FormCheckbox
          id="CT4"
          checked={formData.CT4}
          onChange={(val) => handleFieldChange("CT4", val)}
          position={{ top: 602, left: 890 }}
        />
        <FormCheckbox
          id="CT5"
          checked={formData.CT5}
          onChange={(val) => handleFieldChange("CT5", val)}
          position={{ top: 620, left: 890 }}
        />
        <FormCheckbox
          id="CS1"
          checked={formData.CS1}
          onChange={(val) => handleFieldChange("CS1", val)}
          position={{ top: 546, left: 930 }}
        />
        <FormCheckbox
          id="CS2"
          checked={formData.CS2}
          onChange={(val) => handleFieldChange("CS2", val)}
          position={{ top: 565, left: 930 }}
        />
        <FormCheckbox
          id="CS3"
          checked={formData.CS3}
          onChange={(val) => handleFieldChange("CS3", val)}
          position={{ top: 585, left: 930 }}
        />
        <FormCheckbox
          id="CS4"
          checked={formData.CS4}
          onChange={(val) => handleFieldChange("CS4", val)}
          position={{ top: 602, left: 930 }}
        />
        <FormCheckbox
          id="CS5"
          checked={formData.CS5}
          onChange={(val) => handleFieldChange("CS5", val)}
          position={{ top: 620, left: 930 }}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 552, left: 960 }}
          width={130}
          height={80}
          placeholder="Add Text"
        />
        <FormTextInput
          id="FCC"
          value={formData.FCC}
          onChange={(val) => handleFieldChange("FCC", val)}
          position={{ top: 642, left: 810 }}
          width={100}
        />
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 658, left: 810 }}
          width={100}
        />
        <FormTextInput
          id="FCD"
          value={formData.FCD}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 642, left: 1000 }}
          width={100}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 658, left: 1000 }}
          width={100}
        />
        
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 485, left: 30 }}
          width={670}
          height={225}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default ShannallePickUpDeliveryCounter;
