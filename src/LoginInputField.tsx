import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  error?: boolean;
  className?: string; // Add className prop
}

export const LoginInputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  className, // Destructure className prop
}) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <label className="text-gray-700">{label}:</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md flex-1`}
      />
    </div>
  );
};
export default LoginInputField;