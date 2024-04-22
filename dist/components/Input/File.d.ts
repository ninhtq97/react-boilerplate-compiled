/// <reference types="react" />
import { TAttachment } from 'types';
declare const InputFile: import("react").ForwardRefExoticComponent<{
    label?: string | undefined;
    placeholder?: string | undefined;
    preview?: TAttachment[] | undefined;
    disabled?: boolean | undefined;
    error?: boolean | undefined;
    helperText?: string | undefined;
    maxFiles?: number | undefined;
    value?: File[] | undefined;
    onChange?: ((files: File[]) => void) | undefined;
    onRemove?: ((...args: any[]) => void) | undefined;
} & Omit<import("react").InputHTMLAttributes<HTMLElement>, "value" | "onChange"> & import("react").RefAttributes<HTMLInputElement>>;
export default InputFile;
