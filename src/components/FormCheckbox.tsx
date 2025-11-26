import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { usePrintMode } from "@/contexts/PrintModeContext";

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
  const { isPrintMode } = usePrintMode();
  const [internalChecked, setInternalChecked] = useState(controlledChecked ?? false);
  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

  const handleChange = (newChecked: boolean) => {
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  // Render as plain div with checkmark in print mode
  if (isPrintMode) {
    return (
      <div
        className="absolute border border-black flex items-center justify-center bg-white"
        style={{
          top: `${position.top + 6}px`,
          left: `${position.left}px`,
          width: '16px',
          height: '14px',
          boxSizing: 'border-box',
          padding: '0',
          margin: '0',
        }}
      >
        {checked && (
          <svg viewBox="0 0 24 24" className="w-3 h-3" style={{ display: 'block' }}>
            <path
              d="M20 6L9 17l-5-5"
              stroke="black"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    );
  }

  return (
    <div
      className="absolute"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleChange}
        className={cn(
        "h-[14px] w-[16px] border border-black",
        "data-[state=checked]:bg-transparent",
        "data-[state=checked]:text-black",
        "[&>svg]:h-3 [&>svg]:w-3"
        )}
      />
    </div>
  );
};