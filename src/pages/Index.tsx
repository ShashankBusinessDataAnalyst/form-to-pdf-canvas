import { TemplateEditor } from "@/components/TemplateEditor";
import { FormCheckbox } from "@/components/FormCheckbox";
import { FormTextInput } from "@/components/FormTextInput";
import { FormNumberInput } from "@/components/FormNumberInput";
import { FormDatePicker } from "@/components/FormDatePicker";
import coldTemplate from "@/assets/cold-template.png";

const Index = () => {
  return (
    <TemplateEditor
      templateImage={coldTemplate}
      templateName="SHANNON COLD - Technical Drawing"
    >
      {/* Date Pickers */}
      <FormDatePicker
        id="createdDate"
        position={{ top: 20, left: 330 }}
        placeholder="DD/MM/YYYY"
      />
      <FormDatePicker
        id="approvedDate"
        position={{ top: 769, left: 500 }}
        placeholder="DD/MM/YYYY"
      />

      {/* Text Inputs */}
      <FormTextInput
        id="clientName"
        position={{ top: 265, left: 370 }}
        width={300}
        placeholder="Client Name"
      />
      <FormTextInput
        id="prepared"
        position={{ top: 745, left: 65 }}
        width={100}
      />
      <FormTextInput
        id="reviewed"
        position={{ top: 745, left: 210 }}
        width={100}
      />
      <FormTextInput
        id="approved"
        position={{ top: 745, left: 345 }}
        width={100}
      />

      {/* Dimension Checkboxes with Quantities */}
      <FormCheckbox id="check3ft" label="3 ft" position={{ top: 345, left: 235 }} />
      <FormNumberInput id="qty3ft" position={{ top: 345, left: 290 }} width={50} placeholder="" />
      
      <FormCheckbox id="check4ft" label="4 ft" position={{ top: 370, left: 235 }} />
      <FormNumberInput id="qty4ft" position={{ top: 370, left: 290 }} width={50} placeholder="" />
      
      <FormCheckbox id="check5ft" label="5 ft" position={{ top: 395, left: 235 }} />
      <FormNumberInput id="qty5ft" position={{ top: 395, left: 290 }} width={50} placeholder="" />
      
      <FormCheckbox id="check6ft" label="6 ft" position={{ top: 420, left: 235 }} />
      <FormNumberInput id="qty6ft" position={{ top: 420, left: 290 }} width={50} placeholder="" />

      {/* Cabin Light Checkboxes */}
      <FormCheckbox id="cabinNW" label="N W" position={{ top: 340, left: 815 }} />
      <FormNumberInput id="CNW" position={{ top: 340, left: 860 }} width={50} placeholder="" />
      
      <FormCheckbox id="cabinCW" label="C W" position={{ top: 365, left: 815 }} />
      <FormNumberInput id="CCW" position={{ top: 365, left: 860 }} width={50} placeholder="" />

      {/* Skirting Light Checkboxes */}
      <FormCheckbox id="skirtingNW" label="N W" position={{ top: 340, left: 945 }} />
      <FormNumberInput id="SNW" position={{ top: 340, left: 990 }} width={50} placeholder="" />
      
      <FormCheckbox id="skirtingWW" label="W W" position={{ top: 365, left: 945 }} />
      <FormNumberInput id="SWW" position={{ top: 365, left: 990 }} width={50} placeholder="" />

      {/* Drop Light Checkboxes */}
      <FormCheckbox id="dropNW" label="N W" position={{ top: 340, left: 1090 }} />
      <FormNumberInput id="DNW" position={{ top: 340, left: 1135 }} width={50} placeholder="" />
      
      <FormCheckbox id="dropWW" label="W W" position={{ top: 365, left: 1090 }} />
      <FormNumberInput id="DWW" position={{ top: 365, left: 1135 }} width={50} placeholder="" />
    </TemplateEditor>
  );
};

export default Index;
