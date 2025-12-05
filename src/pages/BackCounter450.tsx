import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormCheckbox } from "@/components/FormCheckbox";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { FormTextarea } from "@/components/FormTextarea";
import Back_Counter_450_tmpt from "@/assets/Back_Counter_450_tmpt.png"; //Make sure the file name matches the actual template background file in assets folder.

const BackCounter450 = () => {
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
    qty7ft: "",
    qty8ft: "",
    "3ft": false,
    "4ft": false,
    "5ft": false,
    "6ft": false,
    "7ft": false,
    "8ft": false,
    SSFinish: false,
    Shelves: false,
    FShelves: false,
    Corian: false,
    Shelves1: false,
    DWW: false,
    Granite: false,
    Shelves2: false,
    NanoStone: false,
    Shelves3: false,
    SLDoor: false,
    WSB: false,
    Alegs: false,
    HingedDoor: false,
    WTSB: false,
    WODoor: false,
    WireManager: false,
    sampleTextarea: "",
    TCC: "",
    TCD: "",
    TNSD: "",
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
      qty7ft: "",
      qty8ft: "",
      "3ft": false,
      "4ft": false,
      "5ft": false,
      "6ft": false,
      "7ft": false,
      "8ft": false,
      SSFinish: false,
      Shelves: false,
      FShelves: false,
      Corian: false,
      Shelves1: false,
      DWW: false,
      Granite: false,
      Shelves2: false,
      NanoStone: false,
      Shelves3: false,
      SLDoor: false,
      WSB: false,
      Alegs: false,
      HingedDoor: false,
      WTSB: false,
      WODoor: false,
      WireManager: false,
      sampleTextarea: "",
      TCC: "",
      TCD: "",
      TNSD: "",
      splnote: "",
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={Back_Counter_450_tmpt} //Background image of the template.The png file should be of high quality.
        templateName="Back Counter 450 Template"
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
          position={{ top: 322, left: 213 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 322, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="4ft"
          checked={formData["4ft"]}
          onChange={(val) => handleFieldChange("4ft", val)}
          position={{ top: 341, left: 213 }}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 341, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="5ft"
          checked={formData["5ft"]}
          onChange={(val) => handleFieldChange("5ft", val)}
          position={{ top: 360, left: 213 }}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty5ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 360, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="6ft"
          checked={formData["6ft"]}
          onChange={(val) => handleFieldChange("6ft", val)}
          position={{ top: 378, left: 213 }}
        />
        <FormNumberInput
          id="qty6ft"
          value={formData.qty6ft}
          onChange={(val) => handleFieldChange("qty6ft", val)}
          position={{ top: 378, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="7ft"
          checked={formData["7ft"]}
          onChange={(val) => handleFieldChange("7ft", val)}
          position={{ top: 397, left: 213 }}
        />
        <FormNumberInput
          id="qty7ft"
          value={formData.qty7ft}
          onChange={(val) => handleFieldChange("qty7ft", val)}
          position={{ top: 397, left: 233 }}
          width={80}
          placeholder="Qty"
        />
        <FormCheckbox
          id="8ft"
          checked={formData["8ft"]}
          onChange={(val) => handleFieldChange("8ft", val)}
          position={{ top: 415, left: 213 }}
        />
        <FormNumberInput
          id="qty8ft"
          value={formData.qty8ft}
          onChange={(val) => handleFieldChange("qty8ft", val)}
          position={{ top: 415, left: 233 }}
          width={80}
          placeholder="Qty"
        />

        <FormCheckbox
          id="SSFinish"
          checked={formData.SSFinish}
          onChange={(val) => handleFieldChange("SSFinish", val)}
          position={{ top: 322, left: 817 }}
        />
        <FormCheckbox
          id="Shelves"
          checked={formData.Shelves}
          onChange={(val) => handleFieldChange("Shelves", val)}
          position={{ top: 322, left: 960 }}
        />
        <FormCheckbox
          id="FShelves"
          checked={formData.FShelves}
          onChange={(val) => handleFieldChange("FShelves", val)}
          position={{ top: 322, left: 1078 }}
        />
        <FormCheckbox
          id="Corian"
          checked={formData.Corian}
          onChange={(val) => handleFieldChange("Corian", val)}
          position={{ top: 340, left: 817 }}
        />
        <FormCheckbox
          id="Shelves1"
          checked={formData.Shelves1}
          onChange={(val) => handleFieldChange("Shelves1", val)}
          position={{ top: 340, left: 960 }}
        />
        <FormCheckbox
          id="DWW"
          checked={formData.DWW}
          onChange={(val) => handleFieldChange("DWW", val)}
          position={{ top: 340, left: 1078 }}
        />
        <FormCheckbox
          id="Granite"
          checked={formData.Granite}
          onChange={(val) => handleFieldChange("Granite", val)}
          position={{ top: 360, left: 817 }}
        />
        <FormCheckbox
          id="Shelves2"
          checked={formData.Shelves2}
          onChange={(val) => handleFieldChange("Shelves2", val)}
          position={{ top: 360, left: 960 }}
        />
        <FormCheckbox
          id="NanoStone"
          checked={formData.NanoStone}
          onChange={(val) => handleFieldChange("NanoStone", val)}
          position={{ top: 378, left: 817 }}
        />
        <FormCheckbox
          id="Shelves3"
          checked={formData.Shelves3}
          onChange={(val) => handleFieldChange("Shelves3", val)}
          position={{ top: 378, left: 960 }}
        />
        <FormCheckbox
          id="SLDoor"
          checked={formData.SLDoor}
          onChange={(val) => handleFieldChange("SLDoor", val)}
          position={{ top: 414, left: 817 }}
        />
        <FormCheckbox
          id="WSB"
          checked={formData.WSB}
          onChange={(val) => handleFieldChange("WSB", val)}
          position={{ top: 414, left: 960 }}
        />
        <FormCheckbox
          id="Alegs"
          checked={formData.Alegs}
          onChange={(val) => handleFieldChange("Alegs", val)}
          position={{ top: 415, left: 1078 }}
        />
        <FormCheckbox
          id="HingedDoor"
          checked={formData.HingedDoor}
          onChange={(val) => handleFieldChange("HingedDoor", val)}
          position={{ top: 433, left: 817 }}
        />
        <FormCheckbox
          id="WTSB"
          checked={formData.WTSB}
          onChange={(val) => handleFieldChange("WTSB", val)}
          position={{ top: 433, left: 960 }}
        />
        <FormCheckbox
          id="WODoor"
          checked={formData.WODoor}
          onChange={(val) => handleFieldChange("WODoor", val)}
          position={{ top: 452, left: 817 }}
        />
        <FormCheckbox
          id="WireManager"
          checked={formData.WireManager}
          onChange={(val) => handleFieldChange("WireManager", val)}
          position={{ top: 452, left: 960 }}
        />
        <FormTextarea
          id="sampleTextarea"
          value={formData.sampleTextarea}
          onChange={(val) => handleFieldChange("sampleTextarea", val)}
          position={{ top: 510, left: 920 }}
          width={170}
          height={40}
          placeholder="Add Text"
        />
        <FormTextInput
          id="TCC"
          value={formData.TCC}
          onChange={(val) => handleFieldChange("TCC", val)}
          position={{ top: 490, left: 820 }}
          width={80}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 510, left: 820 }}
          width={80}
        />
        <FormTextInput
          id="TNSD"
          value={formData.TNSD}
          onChange={(val) => handleFieldChange("TNSD", val)}
          position={{ top: 528, left: 820 }}
          width={80}
        />
        <FormTextarea
          id="splnote"
          value={formData.splnote}
          onChange={(val) => handleFieldChange("splnote", val)}
          position={{ top: 460, left: 30 }}
          width={680}
          height={240}
          placeholder="Add Text"
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default BackCounter450;
