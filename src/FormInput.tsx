"use client";

import * as React from "react";

interface FormInputProps {
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  placeholder,
}) => {
  const inputClasses =
    "px-0 py-2.5 text-sm border-b border-solid border-[none] border-b-neutral-400";

  return (
    <div className="flex flex-col flex-1 gap-2.5">
      <label className="text-xs font-medium text-neutral-400">{label}</label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          className={`${inputClasses} resize-none h-[100px]`}
        />
      ) : (
        <input type={type} className={inputClasses} placeholder={placeholder} />
      )}
    </div>
  );
};
export default FormInput;