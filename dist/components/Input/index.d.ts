/// <reference types="react" />
import { End, Start } from 'types';
type Props = {
    floating?: boolean;
    inputClassName?: string;
    tag?: React.ElementType;
    error?: boolean;
    helperText?: string;
    icon?: React.ReactNode;
    iconPosition?: Start | End;
    prefix?: string;
} & React.HTMLProps<HTMLInputElement>;
export declare const Input: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const InputPassword: import("react").ForwardRefExoticComponent<Omit<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export declare const ContentEditable: import("react").ForwardRefExoticComponent<Omit<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLElement>>;
export { default as Checkbox } from './Checkbox';
export { default as File } from './File';
export { default as Range } from './Range';
export { default as Switch } from './Switch';
