/// <reference types="react" />
type ButtonVariant = 'filled' | 'outlined';
type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';
type Props = {
    loading?: boolean;
    loadingIndicator?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
} & React.ComponentProps<'button'>;
declare const Button: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
