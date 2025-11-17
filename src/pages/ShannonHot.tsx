import { useState } from "react";
import { TemplateEditor } from "@/components/TemplateEditor";
import { FormCheckbox } from "@/components/FormCheckbox";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import { FormTextarea } from "@/components/FormTextarea";
import { PrintModeProvider } from "@/contexts/PrintModeContext";
import { TemplateNavigation } from "@/components/TemplateNavigation";
import hotTemplate from "@/assets/hot-template.png";

const ShannonHot = () => {
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
      <TemplateNavigation currentTemplate="hot" />
      <TemplateEditor
        templateImage={hotTemplate}
        templateName="SHANNON HOT - Technical Drawing"
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
          position={{ top: 18, left: 735 }}
          placeholder="DD/MM/YYYY"
        />
        <FormDatePicker
          id="approvedDate"
          value={formData.approvedDate}
          onChange={(val) => handleFieldChange("approvedDate", val)}
          position={{ top: 18, left: 1115 }}
          placeholder="DD/MM/YYYY"
        />

        {/* Text Inputs */}
        <FormTextInput
          id="clientName"
          value={formData.clientName}
          onChange={(val) => handleFieldChange("clientName", val)}
          position={{ top: 55, left: 150 }}
          width={180}
        />
        <FormTextInput
          id="soNumber"
          value={formData.soNumber}
          onChange={(val) => handleFieldChange("soNumber", val)}
          position={{ top: 55, left: 595 }}
          width={180}
        />
        <FormTextInput
          id="FCR"
          value={formData.FCR}
          onChange={(val) => handleFieldChange("FCR", val)}
          position={{ top: 185, left: 215 }}
          width={110}
        />
        <FormTextInput
          id="FCD"
          value={formData.FCD}
          onChange={(val) => handleFieldChange("FCD", val)}
          position={{ top: 185, left: 495 }}
          width={110}
        />
        <FormTextInput
          id="TCR"
          value={formData.TCR}
          onChange={(val) => handleFieldChange("TCR", val)}
          position={{ top: 338, left: 215 }}
          width={110}
        />
        <FormTextInput
          id="TCD"
          value={formData.TCD}
          onChange={(val) => handleFieldChange("TCD", val)}
          position={{ top: 338, left: 495 }}
          width={110}
        />
        <FormTextInput
          id="materialReference"
          value={formData.materialReference}
          onChange={(val) => handleFieldChange("materialReference", val)}
          position={{ top: 500, left: 990 }}
          width={180}
        />

        {/* Number Inputs */}
        <FormNumberInput
          id="qty3ft"
          value={formData.qty3ft}
          onChange={(val) => handleFieldChange("qty3ft", val)}
          position={{ top: 100, left: 200 }}
          width={80}
        />
        <FormNumberInput
          id="qty4ft"
          value={formData.qty4ft}
          onChange={(val) => handleFieldChange("qty4ft", val)}
          position={{ top: 115, left: 200 }}
          width={80}
        />
        <FormNumberInput
          id="qty5ft"
          value={formData.qty5ft}
          onChange={(val) => handleFieldChange("qty5ft", val)}
          position={{ top: 130, left: 200 }}
          width={80}
        />
        <FormNumberInput
          id="qty6ft"
          value={formData.qty6ft}
          onChange={(val) => handleFieldChange("qty6ft", val)}
          position={{ top: 145, left: 200 }}
          width={80}
        />

        {/* Checkboxes - Size Selection */}
        <FormCheckbox
          id="check3ft"
          checked={formData.check3ft}
          onChange={(val) => handleFieldChange("check3ft", val)}
          position={{ top: 100, left: 130 }}
        />
        <FormCheckbox
          id="check4ft"
          checked={formData.check4ft}
          onChange={(val) => handleFieldChange("check4ft", val)}
          position={{ top: 115, left: 130 }}
        />
        <FormCheckbox
          id="check5ft"
          checked={formData.check5ft}
          onChange={(val) => handleFieldChange("check5ft", val)}
          position={{ top: 130, left: 130 }}
        />
        <FormCheckbox
          id="check6ft"
          checked={formData.check6ft}
          onChange={(val) => handleFieldChange("check6ft", val)}
          position={{ top: 145, left: 130 }}
        />

        {/* Cabin Checkboxes */}
        <FormCheckbox
          id="cabinNW"
          checked={formData.cabinNW}
          onChange={(val) => handleFieldChange("cabinNW", val)}
          position={{ top: 218, left: 100 }}
        />
        <FormCheckbox
          id="cabinCW"
          checked={formData.cabinCW}
          onChange={(val) => handleFieldChange("cabinCW", val)}
          position={{ top: 218, left: 380 }}
        />

        {/* Skirting Checkboxes */}
        <FormCheckbox
          id="skirtingNW"
          checked={formData.skirtingNW}
          onChange={(val) => handleFieldChange("skirtingNW", val)}
          position={{ top: 245, left: 100 }}
        />
        <FormCheckbox
          id="skirtingWW"
          checked={formData.skirtingWW}
          onChange={(val) => handleFieldChange("skirtingWW", val)}
          position={{ top: 245, left: 380 }}
        />

        {/* Drop Checkboxes */}
        <FormCheckbox
          id="dropNW"
          checked={formData.dropNW}
          onChange={(val) => handleFieldChange("dropNW", val)}
          position={{ top: 272, left: 100 }}
        />
        <FormCheckbox
          id="dropWW"
          checked={formData.dropWW}
          onChange={(val) => handleFieldChange("dropWW", val)}
          position={{ top: 272, left: 380 }}
        />

        {/* Leg and B Checkboxes */}
        <FormCheckbox
          id="leg"
          checked={formData.leg}
          onChange={(val) => handleFieldChange("leg", val)}
          position={{ top: 299, left: 100 }}
        />
        <FormCheckbox
          id="b3"
          checked={formData.b3}
          onChange={(val) => handleFieldChange("b3", val)}
          position={{ top: 299, left: 380 }}
        />
        <FormCheckbox
          id="b4"
          checked={formData.b4}
          onChange={(val) => handleFieldChange("b4", val)}
          position={{ top: 318, left: 380 }}
        />

        {/* Material Type Checkboxes - Top */}
        <FormCheckbox
          id="SSMT"
          checked={formData.SSMT}
          onChange={(val) => handleFieldChange("SSMT", val)}
          position={{ top: 370, left: 100 }}
        />
        <FormCheckbox
          id="RGMT"
          checked={formData.RGMT}
          onChange={(val) => handleFieldChange("RGMT", val)}
          position={{ top: 370, left: 230 }}
        />
        <FormCheckbox
          id="GMT"
          checked={formData.GMT}
          onChange={(val) => handleFieldChange("GMT", val)}
          position={{ top: 370, left: 380 }}
        />

        {/* Material Type Checkboxes - Middle */}
        <FormCheckbox
          id="SSMR"
          checked={formData.SSMR}
          onChange={(val) => handleFieldChange("SSMR", val)}
          position={{ top: 397, left: 100 }}
        />
        <FormCheckbox
          id="RGMR"
          checked={formData.RGMR}
          onChange={(val) => handleFieldChange("RGMR", val)}
          position={{ top: 397, left: 230 }}
        />
        <FormCheckbox
          id="GMR"
          checked={formData.GMR}
          onChange={(val) => handleFieldChange("GMR", val)}
          position={{ top: 397, left: 380 }}
        />

        {/* Front Material Finish Checkboxes */}
        <FormCheckbox
          id="CorianwithDesign"
          checked={formData.CorianwithDesign}
          onChange={(val) => handleFieldChange("CorianwithDesign", val)}
          position={{ top: 424, left: 100 }}
        />
        <FormCheckbox
          id="RafterWithDesign"
          checked={formData.RafterWithDesign}
          onChange={(val) => handleFieldChange("RafterWithDesign", val)}
          position={{ top: 451, left: 100 }}
        />
        <FormCheckbox
          id="Porsaline"
          checked={formData.Porsaline}
          onChange={(val) => handleFieldChange("Porsaline", val)}
          position={{ top: 424, left: 380 }}
        />
        <FormCheckbox
          id="Alabaster"
          checked={formData.Alabaster}
          onChange={(val) => handleFieldChange("Alabaster", val)}
          position={{ top: 451, left: 380 }}
        />
        <FormCheckbox
          id="SSFinish"
          checked={formData.SSFinish}
          onChange={(val) => handleFieldChange("SSFinish", val)}
          position={{ top: 477, left: 380 }}
        />

        {/* Front Door Material Finish Checkboxes */}
        <FormCheckbox
          id="FCorianwithDesign"
          checked={formData.FCorianwithDesign}
          onChange={(val) => handleFieldChange("FCorianwithDesign", val)}
          position={{ top: 185, left: 880 }}
        />
        <FormCheckbox
          id="FRafterWithDesign"
          checked={formData.FRafterWithDesign}
          onChange={(val) => handleFieldChange("FRafterWithDesign", val)}
          position={{ top: 212, left: 880 }}
        />
        <FormCheckbox
          id="FPorsaline"
          checked={formData.FPorsaline}
          onChange={(val) => handleFieldChange("FPorsaline", val)}
          position={{ top: 185, left: 1145 }}
        />
        <FormCheckbox
          id="FAlabaster"
          checked={formData.FAlabaster}
          onChange={(val) => handleFieldChange("FAlabaster", val)}
          position={{ top: 212, left: 1145 }}
        />
        <FormCheckbox
          id="FSSFinish"
          checked={formData.FSSFinish}
          onChange={(val) => handleFieldChange("FSSFinish", val)}
          position={{ top: 238, left: 1145 }}
        />

        {/* Top Door Material Finish Checkboxes */}
        <FormCheckbox
          id="TCorianwithDesign"
          checked={formData.TCorianwithDesign}
          onChange={(val) => handleFieldChange("TCorianwithDesign", val)}
          position={{ top: 338, left: 880 }}
        />
        <FormCheckbox
          id="TRafterWithDesign"
          checked={formData.TRafterWithDesign}
          onChange={(val) => handleFieldChange("TRafterWithDesign", val)}
          position={{ top: 365, left: 880 }}
        />
        <FormCheckbox
          id="TPorsaline"
          checked={formData.TPorsaline}
          onChange={(val) => handleFieldChange("TPorsaline", val)}
          position={{ top: 338, left: 1145 }}
        />
        <FormCheckbox
          id="TAlabaster"
          checked={formData.TAlabaster}
          onChange={(val) => handleFieldChange("TAlabaster", val)}
          position={{ top: 365, left: 1145 }}
        />
        <FormCheckbox
          id="TSSFinish"
          checked={formData.TSSFinish}
          onChange={(val) => handleFieldChange("TSSFinish", val)}
          position={{ top: 391, left: 1145 }}
        />

        {/* Special Notes Textarea */}
        <FormTextarea
          id="specialNotes"
          value={formData.specialNotes}
          onChange={(val) => handleFieldChange("specialNotes", val)}
          position={{ top: 620, left: 50 }}
          width={600}
          height={180}
          placeholder="Enter special notes here..."
        />
      </TemplateEditor>
    </PrintModeProvider>
  );
};

export default ShannonHot;
