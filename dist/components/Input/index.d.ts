import React from 'react';
import { End, Start } from 'types';
type Props = {
    floating?: boolean;
    containerClassName?: string;
    inputClassName?: string;
    tag?: React.ElementType;
    error?: boolean;
    helperText?: string;
    icon?: React.ReactNode;
    iconPosition?: Start | End;
    prefix?: string;
} & React.HTMLProps<HTMLInputElement>;
export declare const Input: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export declare const InputPassword: React.ForwardRefExoticComponent<Omit<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;
type TextareaAutosizeProps = {
    container?: string;
    minRows: number;
    maxRows: number;
} & Omit<React.ComponentProps<typeof Input>, 'tag'>;
export declare const TextareaAutosize: React.ForwardRefExoticComponent<Omit<TextareaAutosizeProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;
export { default as Checkbox } from './Checkbox';
export { default as File } from './File';
export { default as Range } from './Range';
export { default as Switch } from './Switch';
