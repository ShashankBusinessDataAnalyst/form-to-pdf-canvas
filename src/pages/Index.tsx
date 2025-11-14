import { TemplateEditor } from "@/components/TemplateEditor";
import coldTemplate from "@/assets/cold-template.png";

const Index = () => {
  const templateFields = [
    {
      id: "dimension-group",
      type: "checkbox-group" as const,
      position: { top: 345, left: 235 },
      checkboxes: [
        { id: "check3ft", label: "3 ft", qtyId: "qty3ft" },
        { id: "check4ft", label: "4 ft", qtyId: "qty4ft" },
        { id: "check5ft", label: "5 ft", qtyId: "qty5ft" },
        { id: "check6ft", label: "6 ft", qtyId: "qty6ft" },
      ],
    },
    {
      id: "cabin-light-group",
      type: "checkbox-group" as const,
      position: { top: 340, left: 815 },
      checkboxes: [
        { id: "cabinNW", label: "N W", qtyId: "CNW" },
        { id: "cabinCW", label: "C W", qtyId: "CCW" },
      ],
    },
    {
      id: "skirting-light-group",
      type: "checkbox-group" as const,
      position: { top: 340, left: 945 },
      checkboxes: [
        { id: "skirtingNW", label: "N W", qtyId: "SNW" },
        { id: "skirtingWW", label: "W W", qtyId: "SWW" },
      ],
    },
    {
      id: "drop-light-group",
      type: "checkbox-group" as const,
      position: { top: 340, left: 1090 },
      checkboxes: [
        { id: "dropNW", label: "N W", qtyId: "DNW" },
        { id: "dropWW", label: "W W", qtyId: "DWW" },
      ],
    },
    {
      id: "createdDate",
      type: "date" as const,
      position: { top: 23, left: 360 },
      placeholder: "DD/MM/YYYY",
    },
    {
      id: "approvedDate",
      type: "date" as const,
      position: { top: 769, left: 500 },
      placeholder: "DD/MM/YYYY",
    },
    {
      id: "clientName",
      type: "text" as const,
      position: { top: 265, left: 370 },
      className: "w-[300px]",
    },
    {
      id: "prepared",
      type: "text" as const,
      position: { top: 745, left: 65 },
      className: "w-[100px]",
    },
    {
      id: "reviewed",
      type: "text" as const,
      position: { top: 745, left: 210 },
      className: "w-[100px]",
    },
    {
      id: "approved",
      type: "text" as const,
      position: { top: 745, left: 345 },
      className: "w-[100px]",
    },
  ];

  return (
    <TemplateEditor
      templateImage={coldTemplate}
      templateName="SHANNON COLD - Technical Drawing"
      fields={templateFields}
    />
  );
};

export default Index;
