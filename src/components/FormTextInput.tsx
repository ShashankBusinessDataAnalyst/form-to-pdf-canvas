import React, { useState } from "react";

interface FormTextInputProps {
  id: string;
  position: { top: number; left: number };
  placeholder?: string;
  width?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export const FormTextInput: React.FC<FormTextInputProps> = ({
  id,
  position,
  placeholder = "",
  width = 100,
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
      type="text"
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      className="absolute border-none outline-none bg-transparent text-center text-sm focus:border-b focus:border-gray-400 text-black"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${width}px`,
      }}
    />
  );
};
