import React, { useState } from "react";

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
  const [internalValue, setInternalValue] = useState(controlledValue ?? "");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange?.(newValue);
  };

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
