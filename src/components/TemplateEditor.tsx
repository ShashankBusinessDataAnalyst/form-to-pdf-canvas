import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { generatePDF } from "@/lib/pdfGenerator";
import { toast } from "sonner";

interface FieldPosition {
  top: number;
  left: number;
}

interface CheckboxField {
  id: string;
  label: string;
  qtyId?: string;
}

interface FieldGroup {
  id: string;
  type: "checkbox-group" | "text" | "date" | "number";
  position: FieldPosition;
  checkboxes?: CheckboxField[];
  placeholder?: string;
  className?: string;
}

interface TemplateEditorProps {
  templateImage: string;
  templateName: string;
  fields: FieldGroup[];
}

export const TemplateEditor: React.FC<TemplateEditorProps> = ({
  templateImage,
  templateName,
  fields,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (checkboxId: string, checked: boolean) => {
    setCheckboxStates((prev) => ({ ...prev, [checkboxId]: checked }));
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
    toast.success("Data saved successfully!");
  };

  const handleDownload = async () => {
    try {
      await generatePDF("captureArea", `${templateName}-form`);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      toast.error("Failed to generate PDF");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* LEFT SIDEBAR */}
      <div className="w-[260px] bg-[#7286FF] p-5 fixed top-0 left-0 h-full overflow-y-auto">
        <h2 className="text-black text-xl font-bold mb-4 mt-0">Company Logo</h2>

        <div className="mb-3">
          <Label htmlFor="salesPerson" className="text-black">Sales Person Name</Label>
          <Input
            type="text"
            id="salesPerson"
            className="w-full mt-1"
            onChange={(e) => handleInputChange("salesPerson", e.target.value)}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="date" className="text-black">Date</Label>
          <Input
            type="date"
            id="date"
            className="w-full mt-1"
            onChange={(e) => handleInputChange("date", e.target.value)}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="model" className="text-black">Model</Label>
          <Input
            type="text"
            id="model"
            className="w-full mt-1"
            onChange={(e) => handleInputChange("model", e.target.value)}
          />
        </div>

        <Button onClick={handleSave} className="w-full mt-3">
          Save
        </Button>
        <Button
          onClick={handleDownload}
          className="w-full mt-3 bg-[#00DD00] hover:bg-[#00BB00] text-black"
        >
          Download
        </Button>
      </div>

      {/* MAIN DRAWING AREA */}
      <div className="ml-[260px] flex-1 bg-[#E0E0E0] flex justify-center items-center h-screen overflow-auto">
        <div
          id="captureArea"
          className="relative bg-white border-2 border-purple-600 p-2.5 inline-block"
        >
          {/* IMAGE */}
          <div className="relative">
            <img
              src={templateImage}
              alt={templateName}
              className="block w-[1200px] h-[800px]"
            />

            {/* OVERLAY INPUTS */}
            {fields.map((field) => {
              if (field.type === "checkbox-group" && field.checkboxes) {
                return (
                  <div
                    key={field.id}
                    className="absolute"
                    style={{ top: `${field.position.top}px`, left: `${field.position.left}px` }}
                  >
                    {field.checkboxes.map((checkbox) => (
                      <div key={checkbox.id} className="flex items-center mb-0.5">
                        <label className="flex items-center text-sm">
                          {checkbox.label}
                          <Checkbox
                            className="ml-8"
                            checked={checkboxStates[checkbox.id] || false}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(checkbox.id, checked === true)
                            }
                          />
                        </label>
                        {checkbox.qtyId && checkboxStates[checkbox.id] && (
                          <input
                            id={checkbox.qtyId}
                            type="number"
                            placeholder="Qty"
                            className="border-none outline-none bg-transparent w-[50px] ml-5 text-sm"
                            onChange={(e) => handleInputChange(checkbox.qtyId!, e.target.value)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                );
              }

              if (field.type === "date" || field.type === "text") {
                return (
                  <div
                    key={field.id}
                    className="absolute"
                    style={{ top: `${field.position.top}px`, left: `${field.position.left}px` }}
                  >
                    <input
                      id={field.id}
                      type="text"
                      placeholder={field.placeholder || ""}
                      className={`border-none bg-transparent outline-none text-sm text-center ${field.className || "w-[100px]"}`}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
