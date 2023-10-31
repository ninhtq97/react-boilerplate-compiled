/// <reference types="react" />
type Props = {
    onChange?: (isChecked: boolean) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>;
declare const Switch: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default Switch;
