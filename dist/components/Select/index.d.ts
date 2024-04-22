/// <reference types="react" />
import { Option, Placement } from 'types';
type Props = {
    floating?: boolean;
    className?: string;
    popoverClassName?: string;
    multiple?: boolean;
    disabled?: boolean;
    filterSearch?: boolean;
    label?: string;
    value?: string | number | (string | number)[];
    placement?: Placement;
    options: Option[];
    loading?: boolean;
    required?: boolean;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    onChange: (selected: string | number | (string | number)[]) => void;
    keyword?: string;
    onSearch?: (keyword: string) => void;
};
declare const Select: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export default Select;
