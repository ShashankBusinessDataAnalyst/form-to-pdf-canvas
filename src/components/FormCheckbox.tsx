import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FormCheckboxProps {
  id: string;
  position: { top: number; left: number };
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
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
      className="absolute"
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
        className={cn(
          "h-4 w-4 border-2 border-black ",
          "data-[state=checked]:bg-transparent",
          "data-[state=checked]:text-black",
          "[&>svg]:h-7 [&>svg]:w-6"
        )}
      />
    </div>
  );
};
