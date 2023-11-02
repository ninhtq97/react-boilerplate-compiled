/// <reference types="react" />
import { Center, End, Start } from 'types';
type ButtonLoadingPosition = Start | End | Center;
type ButtonVariant = 'filled' | 'outlined';
type ButtonColor = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
type Props = {
    loading?: boolean;
    loadingPosition?: ButtonLoadingPosition;
    loadingIndicator?: string;
    variant?: ButtonVariant;
    color?: ButtonColor;
} & React.ComponentProps<'button'>;
declare const Button: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;
