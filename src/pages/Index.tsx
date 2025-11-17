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
        position={{ top: 18, left: 365 }}
        placeholder="DD/MM/YYYY"
      />
      <FormDatePicker
        id="SoDate"
        position={{ top: 759, left: 500 }}
        placeholder="DD/MM/YYYY"
      />
      <FormDatePicker
        id="approvedDate"
        position={{ top: 759, left: 730 }}
        placeholder="DD/MM/YYYY"
      />

      {/* Text Inputs */}
      <FormTextInput
        id="clientName"
        position={{ top: 745, left: 300 }}
        width={300}
        placeholder="Client Name"
      />
      <FormTextInput
        id="soNumber"
        position={{ top: 760, left: 345 }}
        width={100}
        placeholder="SO Number"
      />
      <FormTextInput
        id="FCR"
        position={{ top: 595, left: 860 }}
        width={100}
        placeholder="FCR"
      />
      <FormTextInput
        id="FCD"
        position={{ top: 595, left: 1050 }}
        width={100}
        placeholder="FCD"
      />
      <FormTextInput
        id="TCR"
        position={{ top: 613, left: 860 }}
        width={100}
        placeholder="TCR"
      />
      <FormTextInput
        id="TCD"
        position={{ top: 613, left: 1050 }}
        width={100}
        placeholder="TCD"
      />

      {/* Dimension Checkboxes with Quantities */}
      <FormCheckbox id="check3ft" position={{ top: 347, left: 221 }} />
      <FormNumberInput 
        id="qty3ft" 
        position={{ top: 347, left: 290 }} 
        width={50} placeholder="Qty" />
      
      <FormCheckbox id="check4ft"  position={{ top: 367, left: 221 }} />
      <FormNumberInput 
        id="qty4ft" 
        position={{ top: 367, left: 290 }} 
        width={50} 
        placeholder="Qty" />
      
      <FormCheckbox id="check5ft"  position={{ top: 385, left: 221 }} />
      <FormNumberInput 
        id="qty5ft" 
        position={{ top: 385, left: 290 }} 
        width={50} 
        placeholder="Qty" />
      
      <FormCheckbox id="check6ft"  position={{ top: 403, left: 221 }} />
      <FormNumberInput 
        id="qty6ft" 
        position={{ top: 403, left: 290 }} 
        width={50} 
        placeholder="Qty" />

      {/* Cabin Light Checkboxes */}
      <FormCheckbox id="cabinNW"  position={{ top: 329, left: 875 }} />
           
      <FormCheckbox id="cabinCW"  position={{ top: 348, left: 875 }} />
      
      {/* Skirting Light Checkboxes */}
      <FormCheckbox id="skirtingNW"  position={{ top: 329, left: 1003 }} />
           
      <FormCheckbox id="skirtingWW"  position={{ top: 348, left: 1003 }} />
      

      {/* Drop Light Checkboxes */}
      <FormCheckbox id="dropNW"  position={{ top: 329, left: 1157 }} />
           
      <FormCheckbox id="dropWW"  position={{ top: 348, left: 1157 }} />

      {/* Leg */}
      <FormCheckbox id="leg"  position={{ top: 403, left: 875 }} />
      
      {/* Shelves */}
      <FormCheckbox id="b3"  position={{ top: 403, left: 1003 }} />
           
      <FormCheckbox id="b4"  position={{ top: 423, left: 1003 }} />

      {/* Beading finishes */}
      <FormCheckbox id="SSMT"  position={{ top: 403, left: 1073 }} />
           
      <FormCheckbox id="RGMT"  position={{ top: 422, left: 1073 }} />

      <FormCheckbox id="GMT"  position={{ top: 441, left: 1073 }} />
       
      <FormCheckbox id="SSMR"  position={{ top: 403, left: 1155 }} />
           
      <FormCheckbox id="RGMR"  position={{ top: 422, left: 1155 }} />

      <FormCheckbox id="GMR"  position={{ top: 441, left: 1155 }} />
              
      {/* Material Choice */}
      <FormCheckbox id="CorianwithDesign"  position={{ top: 497, left: 877 }} />
           
      <FormCheckbox id="RafterWithDesign"  position={{ top: 515, left: 877 }} />

      <FormCheckbox id="Porsaline"  position={{ top: 533, left: 877 }} />
       
      <FormCheckbox id="Alabaster"  position={{ top: 553, left: 877 }} />
           
      <FormCheckbox id="SSFinish"  position={{ top: 572, left: 877 }} />

      {/* Material Choice - Front*/}
      <FormCheckbox id="FCorianwithDesign"  position={{ top: 497, left: 910 }} />
           
      <FormCheckbox id="FRafterWithDesign"  position={{ top: 515, left: 910 }} />

      <FormCheckbox id="FPorsaline"  position={{ top: 533, left: 910 }} />
       
      <FormCheckbox id="FAlabaster"  position={{ top: 553, left: 910 }} />
           
      <FormCheckbox id="FSSFinish"  position={{ top: 572, left: 910 }} />

      {/* Material Choice - Top*/}
      <FormCheckbox id="TCorianwithDesign"  position={{ top: 497, left: 952 }} />
           
      <FormCheckbox id="TRafterWithDesign"  position={{ top: 515, left: 952 }} />

      <FormCheckbox id="TPorsaline"  position={{ top: 533, left: 952 }} />
       
      <FormCheckbox id="TAlabaster"  position={{ top: 553, left: 952 }} />
           
      <FormCheckbox id="TSSFinish"  position={{ top: 572, left: 952 }} />

      {/* Material Choice - Reference*/}

      <FormTextInput id ="materialReference" position={{ top: 535, left: 977 }} width={200} placeholder="Material Reference" />

    </TemplateEditor>
  );
};

export default Index;
