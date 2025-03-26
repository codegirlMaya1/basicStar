export interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: boolean;
    placeholder?: string;
}