/// <reference types="react" />
type Props = {
    onChange?: (checked: boolean) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'onChange'>;
declare const Switch: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default Switch;
