import React, { useState } from "react";
import { usePrintMode } from "@/contexts/PrintModeContext";

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
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: `${width}px`,
          lineHeight: "1",
          fontSize: "14px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "0",
          margin: "0",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "20px",
          background: "transparent", // 🔥 transparent background
        }}
      >
        {value || ""}
      </div>
    );
  }

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
        background: "transparent", // redundant but safe
      }}
    />
  );
};
