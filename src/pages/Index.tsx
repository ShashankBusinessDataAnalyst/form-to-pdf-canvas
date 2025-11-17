import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormCheckbox } from "@/components/FormCheckbox";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormTextarea } from "@/components/FormTextarea";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import coldTemplate from "@/assets/cold-template.png";

const Index = () => {
  const [formData, setFormData] = useState<Record<string, any>>({
    // Date fields
    createdDate: undefined,
    SoDate: undefined,
    approvedDate: undefined,
    // Text fields
    clientName: "",
    soNumber: "",
    FCR: "",
    FCD: "",
    TCR: "",
    TCD: "",
    materialReference: "",
    specialNotes: "",
    ReferenceNotes: "",
    // Number fields
    qty3ft: "",
    qty4ft: "",
    qty5ft: "",
    qty6ft: "",
    // Checkbox fields
    check3ft: false,
    check4ft: false,
    check5ft: false,
    check6ft: false,
    cabinNW: false,
    cabinCW: false,
    skirtingNW: false,
    skirtingWW: false,
    dropNW: false,
    dropWW: false,
    leg: false,
    b3: false,
    b4: false,
    SSMT: false,
    RGMT: false,
    GMT: false,
    SSMR: false,
    RGMR: false,
    GMR: false,
    CorianwithDesign: false,
    RafterWithDesign: false,
    Porsaline: false,
    Alabaster: false,
    SSFinish: false,
    FCorianwithDesign: false,
    FRafterWithDesign: false,
    FPorsaline: false,
    FAlabaster: false,
    FSSFinish: false,
    TCorianwithDesign: false,
    TRafterWithDesign: false,
    TPorsaline: false,
    TAlabaster: false,
    TSSFinish: false,
  });

  const handleFieldChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleClearAll = () => {
    setFormData({
      createdDate: undefined,
      SoDate: undefined,
      approvedDate: undefined,
      clientName: "",
      soNumber: "",
      FCR: "",
      FCD: "",
      TCR: "",
      TCD: "",
      materialReference: "",
      specialNotes: "",
      ReferenceNotes: "",
      qty3ft: "",
      qty4ft: "",
      qty5ft: "",
      qty6ft: "",
      check3ft: false,
      check4ft: false,
      check5ft: false,
      check6ft: false,
      cabinNW: false,
      cabinCW: false,
      skirtingNW: false,
      skirtingWW: false,
      dropNW: false,
      dropWW: false,
      leg: false,
      b3: false,
      b4: false,
      SSMT: false,
      RGMT: false,
      GMT: false,
      SSMR: false,
      RGMR: false,
      GMR: false,
      CorianwithDesign: false,
      RafterWithDesign: false,
      Porsaline: false,
      Alabaster: false,
      SSFinish: false,
      FCorianwithDesign: false,
      FRafterWithDesign: false,
      FPorsaline: false,
      FAlabaster: false,
      FSSFinish: false,
      TCorianwithDesign: false,
      TRafterWithDesign: false,
      TPorsaline: false,
      TAlabaster: false,
      TSSFinish: false,
    });
  };

  return (
    <PrintModeProvider>
      <TemplateEditor
        templateImage={coldTemplate}
        templateName="SHANNON COLD - Technical Drawing"
        onClearAll={handleClearAll}
      >
        {/* Date Pickers */}
        <FormDatePicker
          id="createdDate"
          value={formData.createdDate}
          onChange={(val) => handleFieldChange("createdDate", val)}
          position={{ top: 18, left: 365 }}
          placeholder="DD/MM/YYYY"
        />
        <FormDatePicker
          id="SoDate"
          value={formData.SoDate}
          onChange={(val) => handleFieldChange("SoDate", val)}
          position={{ top: 759, left: 500 }}
          placeholder="DD/MM/YYYY"
        />
        <FormDatePicker
          id="approvedDate"
          value={formData.approvedDate}
          onChange={(val) => handleFieldChange("approvedDate", val)}
          position={{ top: 759, left: 730 }}
          placeholder="DD/MM/YYYY"
        />

        {/* Text Inputs */}
        <FormTextInput
          id="clientName"
          value={formData.clientName}
          onChange={(val) => handleFieldChange("clientName", val)}
          position={{ top: 742, left: 300 }}
          width={300}
          placeholder="Client Name"
        />
        <FormTextInput
          id="soNumber"
          value={formData.soNumber}
          onChange={(val) => handleFieldChange("soNumber", val)}
          position={{ top: 758, left: 345 }}
          width={100}
          placeholder="SO Number"
        />
        <FormTextInput
          id="FCR"
          value={formData.FCR}
          onChange={(val) => handleFieldChange("FCR", val)}
          position={{ top: 590, left: 860 }}
          width={100}
          placeholder="FCR"
        />
        <FormTextInput
          id="FCD"
          value={formData.FCD}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 590, left: 1050 }}
          width={100}
          placeholder="FCD"
        />
        <FormTextInput
          id="TCR"
          value={formData.TCR}
          onChange={(val) => handleFieldChange("TCR", val)}
          position={{ top: 608, left: 860 }}
          width={100}
          placeholder="TCR"
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 608, left: 1050 }}
          width={100}
          placeholder="TCD"
        />

        {/* Dimension Checkboxes with Quantities */}
        <FormCheckbox
          id="check3ft"
          checked={formData.check3ft}
          onChange={(val) => handleFieldChange("check3ft", val)}
          position={{ top: 350, left: 224 }}
        />
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 345, left: 320 }}
          width={50}
          placeholder="Qty"
        />

        <FormCheckbox
          id="check4ft"
          checked={formData.check4ft}
          onChange={(val) => handleFieldChange("check4ft", val)}
          position={{ top: 370, left: 224 }}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 365, left: 320 }}
          width={50}
          placeholder="Qty"
        />

        <FormCheckbox
          id="check5ft"
          checked={formData.check5ft}
          onChange={(val) => handleFieldChange("check5ft", val)}
          position={{ top: 389, left: 224 }}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty5ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 383, left: 320 }}
          width={50}
          placeholder="Qty"
        />

        <FormCheckbox
          id="check6ft"
          checked={formData.check6ft}
          onChange={(val) => handleFieldChange("check6ft", val)}
          position={{ top: 406, left: 224 }}
        />
        <FormNumberInput
          id="qty6ft"
          value={formData.qty6ft}
          onChange={(val) => handleFieldChange("qty6ft", val)}
          position={{ top: 401, left: 320 }}
          width={50}
          placeholder="Qty"
        />

        {/* Cabin Light Checkboxes */}
        <FormCheckbox
          id="cabinNW"
          checked={formData.cabinNW}
          onChange={(val) => handleFieldChange("cabinNW", val)}
          position={{ top: 333, left: 875 }}
        />

        <FormCheckbox
          id="cabinCW"
          checked={formData.cabinCW}
          onChange={(val) => handleFieldChange("cabinCW", val)}
          position={{ top: 353, left: 875 }}
        />

        {/* Skirting Light Checkboxes */}
        <FormCheckbox
          id="skirtingNW"
          checked={formData.skirtingNW}
          onChange={(val) => handleFieldChange("skirtingNW", val)}
          position={{ top: 333, left: 1003 }}
        />

        <FormCheckbox
          id="skirtingWW"
          checked={formData.skirtingWW}
          onChange={(val) => handleFieldChange("skirtingWW", val)}
          position={{ top: 353, left: 1003 }}
        />

        {/* Drop Light Checkboxes */}
        <FormCheckbox
          id="dropNW"
          checked={formData.dropNW}
          onChange={(val) => handleFieldChange("dropNW", val)}
          position={{ top: 333, left: 1155 }}
        />

        <FormCheckbox
          id="dropWW"
          checked={formData.dropWW}
          onChange={(val) => handleFieldChange("dropWW", val)}
          position={{ top: 352, left: 1155 }}
        />

        {/* Leg */}
        <FormCheckbox
          id="leg"
          checked={formData.leg}
          onChange={(val) => handleFieldChange("leg", val)}
          position={{ top: 406, left: 875 }}
        />

        {/* Shelves */}
        <FormCheckbox
          id="b3"
          checked={formData.b3}
          onChange={(val) => handleFieldChange("b3", val)}
          position={{ top: 406, left: 1003 }}
        />

        <FormCheckbox
          id="b4"
          checked={formData.b4}
          onChange={(val) => handleFieldChange("b4", val)}
          position={{ top: 425, left: 1003 }}
        />

        {/* Beading finishes */}
        <FormCheckbox
          id="SSMT"
          checked={formData.SSMT}
          onChange={(val) => handleFieldChange("SSMT", val)}
          position={{ top: 406, left: 1073 }}
        />

        <FormCheckbox
          id="RGMT"
          checked={formData.RGMT}
          onChange={(val) => handleFieldChange("RGMT", val)}
          position={{ top: 425, left: 1073 }}
        />

        <FormCheckbox
          id="GMT"
          checked={formData.GMT}
          onChange={(val) => handleFieldChange("GMT", val)}
          position={{ top: 444, left: 1073 }}
        />

        <FormCheckbox
          id="SSMR"
          checked={formData.SSMR}
          onChange={(val) => handleFieldChange("SSMR", val)}
          position={{ top: 406, left: 1155 }}
        />

        <FormCheckbox
          id="RGMR"
          checked={formData.RGMR}
          onChange={(val) => handleFieldChange("RGMR", val)}
          position={{ top: 425, left: 1155 }}
        />

        <FormCheckbox
          id="GMR"
          checked={formData.GMR}
          onChange={(val) => handleFieldChange("GMR", val)}
          position={{ top: 444, left: 1155 }}
        />

        {/* Material Choice */}
        <FormCheckbox
          id="CorianwithDesign"
          checked={formData.CorianwithDesign}
          onChange={(val) => handleFieldChange("CorianwithDesign", val)}
          position={{ top: 499, left: 877 }}
        />

        <FormCheckbox
          id="RafterWithDesign"
          checked={formData.RafterWithDesign}
          onChange={(val) => handleFieldChange("RafterWithDesign", val)}
          position={{ top: 517, left: 877 }}
        />

        <FormCheckbox
          id="Porsaline"
          checked={formData.Porsaline}
          onChange={(val) => handleFieldChange("Porsaline", val)}
          position={{ top: 535, left: 877 }}
        />

        <FormCheckbox
          id="Alabaster"
          checked={formData.Alabaster}
          onChange={(val) => handleFieldChange("Alabaster", val)}
          position={{ top: 555, left: 877 }}
        />

        <FormCheckbox
          id="SSFinish"
          checked={formData.SSFinish}
          onChange={(val) => handleFieldChange("SSFinish", val)}
          position={{ top: 574, left: 877 }}
        />

        {/* Material Choice - Front*/}
        <FormCheckbox
          id="FCorianwithDesign"
          checked={formData.FCorianwithDesign}
          onChange={(val) => handleFieldChange("FCorianwithDesign", val)}
          position={{ top: 499, left: 910 }}
        />

        <FormCheckbox
          id="FRafterWithDesign"
          checked={formData.FRafterWithDesign}
          onChange={(val) => handleFieldChange("FRafterWithDesign", val)}
          position={{ top: 517, left: 910 }}
        />

        <FormCheckbox
          id="FPorsaline"
          checked={formData.FPorsaline}
          onChange={(val) => handleFieldChange("FPorsaline", val)}
          position={{ top: 535, left: 910 }}
        />

        <FormCheckbox
          id="FAlabaster"
          checked={formData.FAlabaster}
          onChange={(val) => handleFieldChange("FAlabaster", val)}
          position={{ top: 555, left: 910 }}
        />

        <FormCheckbox
          id="FSSFinish"
          checked={formData.FSSFinish}
          onChange={(val) => handleFieldChange("FSSFinish", val)}
          position={{ top: 574, left: 910 }}
        />

        {/* Material Choice - Top*/}
        <FormCheckbox
          id="TCorianwithDesign"
          checked={formData.TCorianwithDesign}
          onChange={(val) => handleFieldChange("TCorianwithDesign", val)}
          position={{ top: 499, left: 952 }}
        />

        <FormCheckbox
          id="TRafterWithDesign"
          checked={formData.TRafterWithDesign}
          onChange={(val) => handleFieldChange("TRafterWithDesign", val)}
          position={{ top: 517, left: 952 }}
        />

        <FormCheckbox
          id="TPorsaline"
          checked={formData.TPorsaline}
          onChange={(val) => handleFieldChange("TPorsaline", val)}
          position={{ top: 535, left: 952 }}
        />

        <FormCheckbox
          id="TAlabaster"
          checked={formData.TAlabaster}
          onChange={(val) => handleFieldChange("TAlabaster", val)}
          position={{ top: 555, left: 952 }}
        />

        <FormCheckbox
          id="TSSFinish"
          checked={formData.TSSFinish}
          onChange={(val) => handleFieldChange("TSSFinish", val)}
          position={{ top: 574, left: 952 }}
        />

        {/* Special Notes Textarea */}
        <FormTextarea
          id="specialNotes"
          value={formData.specialNotes}
          onChange={(val) => handleFieldChange("specialNotes", val)}
          position={{ top: 540, left: 50 }}
          width={600}
          height={160}
          placeholder="Enter special notes here..."
        />

        {/* Special Notes Textarea */}
        <FormTextarea
          id="ReferenceNotes"
          value={formData.ReferenceNotes}
          onChange={(val) => handleFieldChange("ReferenceNotes", val)}
          position={{ top: 500, left: 990 }}
          width={180}
          height={90}
          placeholder="Enter special notes here..."
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default Index;
