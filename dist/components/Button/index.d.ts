/// <reference types="react" />
type ButtonVariant = 'filled' | 'outlined';
type Props = {
    contentClassName?: React.ComponentProps<'button'>['className'];
    loading?: boolean;
    loadingIndicator?: string;
    variant?: ButtonVariant;
} & React.ComponentProps<'button'>;
declare const Button: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
