import React, { useState } from "react";
import { usePrintMode } from "@/contexts/PrintModeContext";

interface FormTextareaProps {
  id: string;
  position: { top: number; left: number };
  placeholder?: string;
  width?: number;
  height?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  position,
  placeholder = "",
  width = 600,
  height = 180,
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
        className="absolute text-left text-sm text-black"
        style={{
          top: `${position.top-10}px`,
          left: `${position.left}px`,
          width: `${width}px`,
          height: `${height}px`,
          lineHeight: "1.4",
          fontSize: "8px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "4px",
          margin: "0",
          boxSizing: "border-box",
          background: "transparent",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          overflow: "hidden",
        }}
      >
        {value || ""}
      </div>
    );
  }

  return (
    <textarea
      id={id}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      className="absolute border outline-none bg-transparent text-left text-sm focus:border-gray-400 text-black resize-none"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${width}px`,
        height: `${height}px`,
        background: "transparent",
        padding: "4px",
        lineHeight: "1.4",
        fontSize: "8px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    />
  );
};