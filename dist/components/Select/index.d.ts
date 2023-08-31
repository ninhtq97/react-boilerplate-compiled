/// <reference types="react" />
import { Option, Placement } from 'types';
type Props = {
    className?: string;
    isMultiple?: boolean;
    isDisable?: boolean;
    isFilterSearch?: boolean;
    label?: string;
    value?: Option | Option[];
    placement?: Placement;
    options: Option[];
    isLoading?: boolean;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    onChange: (selected: Option | Option[]) => void;
    keyword?: string;
    onSearch?: (keyword: string) => void;
};
declare const Select: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export default Select;
