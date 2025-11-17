import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { generatePDF } from "@/lib/pdfGenerator";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

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
  const [dateValues, setDateValues] = useState<Record<string, Date | undefined>>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (checkboxId: string, checked: boolean) => {
    setCheckboxStates((prev) => ({ ...prev, [checkboxId]: checked }));
  };

  const handleDateChange = (id: string, date: Date | undefined) => {
    setDateValues((prev) => ({ ...prev, [id]: date }));
    if (date) {
      const formatted = format(date, "dd/MM/yyyy");
      setFormData((prev) => ({ ...prev, [id]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: "" }));
    }
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
    <div className="flex h-screen overflow-x-auto min-w-[1440px]">
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
      <div className="ml-[260px] flex-1 bg-[#E0E0E0] min-h-screen overflow-y-auto py-8">
        <div className="flex justify-center">
          <div className="relative">
            {/* HORIZONTAL RULER (TOP) */}
            <div className="flex">
              <div className="w-[30px] h-[30px] bg-[#C0C0C0]"></div>
              <div className="w-[1200px] h-[30px] bg-[#F0F0F0] border-b border-r border-gray-400 relative">
                {Array.from({ length: 13 }).map((_, i) => {
                  const position = i * 100;
                  return (
                    <div
                      key={`h-${i}`}
                      className="absolute top-0 h-full"
                      style={{ left: `${position}px` }}
                    >
                      <div className="w-px h-3 bg-gray-600"></div>
                      <span className="absolute top-3 -translate-x-1/2 text-[10px] text-gray-700">
                        {position}
                      </span>
                      {/* Minor ticks every 50px */}
                      {i < 12 && (
                        <div
                          className="absolute w-px h-2 bg-gray-400"
                          style={{ left: '50px', top: 0 }}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MAIN CONTENT WITH VERTICAL RULER */}
            <div className="flex">
              {/* VERTICAL RULER (LEFT) */}
              <div className="w-[30px] h-[800px] bg-[#F0F0F0] border-r border-b border-gray-400 relative">
                {Array.from({ length: 9 }).map((_, i) => {
                  const position = i * 100;
                  return (
                    <div
                      key={`v-${i}`}
                      className="absolute left-0 w-full"
                      style={{ top: `${position}px` }}
                    >
                      <div className="h-px w-3 bg-gray-600"></div>
                      <span className="absolute left-3 top-0 -translate-y-1/2 text-[10px] text-gray-700">
                        {position}
                      </span>
                      {/* Minor ticks every 50px */}
                      {i < 8 && (
                        <div
                          className="absolute h-px w-2 bg-gray-400"
                          style={{ top: '50px', left: 0 }}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* DRAWING AREA */}
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

              if (field.type === "date") {
                return (
                  <div
                    key={field.id}
                    className="absolute"
                    style={{ top: `${field.position.top}px`, left: `${field.position.left}px` }}
                  >
                    <Popover>
                      <PopoverTrigger asChild>
                        <button
                          className={cn(
                            "border-none bg-transparent outline-none text-sm text-center flex items-center justify-center gap-1",
                            field.className || "w-[100px]",
                            !dateValues[field.id] && "text-muted-foreground"
                          )}
                        >
                          {dateValues[field.id] ? (
                            format(dateValues[field.id]!, "dd/MM/yyyy")
                          ) : (
                            <span className="text-xs">{field.placeholder || "DD/MM/YYYY"}</span>
                          )}
                          <CalendarIcon className="h-3 w-3" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dateValues[field.id]}
                          onSelect={(date) => handleDateChange(field.id, date)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                );
              }

              if (field.type === "text") {
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
        </div>
      </div>
    </div>
  );
};
