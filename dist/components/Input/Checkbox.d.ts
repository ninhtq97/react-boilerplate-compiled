/// <reference types="react" />
type Props = {
    onChange?: (isChecked: boolean) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>;
declare const Checkbox: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default Checkbox;
