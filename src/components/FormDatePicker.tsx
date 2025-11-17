import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface FormDatePickerProps {
  id: string;
  position: { top: number; left: number };
  placeholder?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({
  id,
  position,
  placeholder = "DD/MM/YYYY",
  value: controlledValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState<Date | undefined>(controlledValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (date: Date | undefined) => {
    setInternalValue(date);
    onChange?.(date);
  };
  return (
    <div
      className="absolute"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            className={cn(
              "w-[140px] h-7 justify-start text-left font-normal text-xs px-2 bg-white border border-gray-300 hover:bg-gray-50 rounded",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-1 h-3 w-3" />
            {value ? format(value, "dd/MM/yyyy") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleChange}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
