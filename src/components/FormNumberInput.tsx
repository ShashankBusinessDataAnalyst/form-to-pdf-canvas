import React, { useState } from "react";
import { usePrintMode } from "@/contexts/PrintModeContext";

interface FormNumberInputProps {
  id: string;
  position: { top: number; left: number };
  placeholder?: string;
  width?: number;
  min?: number;
  max?: number;
  value?: number | string;
  onChange?: (value: string) => void;
}

export const FormNumberInput: React.FC<FormNumberInputProps> = ({
  id,
  position,
  placeholder = "",
  width = 80,
  min,
  max,
  value: controlledValue,
  onChange,
}) => {
  const { isPrintMode } = usePrintMode();
  const [internalValue, setInternalValue] = useState(controlledValue ?? "");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  // Render as plain text div in print mode
  if (isPrintMode) {
    return (
      <div
        className="absolute text-center text-sm text-black"
        style={{
          top: `${position.top -5}px`,
          left: `${position.left - 10}px`,
          width: `${width}px`,
          lineHeight: '1',
          fontSize: '14px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '0',
          margin: '0',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20px',
        }}
      >
        {value || ""}
      </div>
    );
  }

  return (
    <input
      id={id}
      type="number"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      min={min}
      max={max}
      className="absolute border-none outline-none bg-transparent text-center text-sm focus:border-b focus:border-gray-400 text-black"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${width}px`,
      }}
    />
  );
};