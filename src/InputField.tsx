"use client";
import * as React from "react";

interface InputFieldProps {
  label: string;
  type?: "text" | "password" | "email";
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  isPassword,
}) => {
  return (
    <div className="w-full max-w-[388px]">
      <label className="text-sm leading-none text-black">{label}</label>
      <div
        className={`flex gap-2.5 items-center px-4 py-4 mt-1.5 w-full text-base leading-loose bg-white rounded-xl border border-solid ${
          error
            ? "border-red-500"
            : value
              ? "border-[#F45E00]"
              : "border-zinc-300"
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="flex-1 shrink basis-0 bg-transparent outline-none text-gray-950"
        />
        {isPassword && (
          <button
            type="button"
            className="flex shrink-0 self-stretch my-auto w-5 h-5"
            aria-label="Toggle password visibility"
          />
        )}
      </div>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default InputField;