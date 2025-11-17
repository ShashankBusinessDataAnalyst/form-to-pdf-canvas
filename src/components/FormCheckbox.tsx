import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxProps {
  id: string;
  label: string;
  position: { top: number; left: number };
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  label,
  position,
  checked: controlledChecked,
  onChange,
}) => {
  const [internalChecked, setInternalChecked] = useState(controlledChecked ?? false);
  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = (newChecked: boolean) => {
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };
  return (
    <div
      className="absolute flex items-center space-x-1"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleChange}
      />
      <Label
        htmlFor={id}
        className="text-sm font-normal cursor-pointer text-black"
      >
        {label}
      </Label>
    </div>
  );
};
