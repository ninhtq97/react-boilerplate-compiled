/// <reference types="react" />
type Props = {
    className?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    value?: string;
    merchantId?: string;
    onChange?: (...event: any[]) => void;
};
declare const InputFile: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLInputElement>>;
export default InputFile;
