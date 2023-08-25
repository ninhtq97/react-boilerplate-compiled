import { ComponentProps } from 'react';
type Props = {
    loading?: boolean;
    loadingPosition?: 'start' | 'end' | 'center';
    loadingIndicator?: string;
    variant?: 'contained' | 'outlined';
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
} & ComponentProps<'button'>;
declare const Button: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
