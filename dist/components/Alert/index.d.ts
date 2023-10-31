/// <reference types="react" />
type Props = {
    size?: keyof typeof mapSize;
    variant?: keyof typeof mapClassname;
} & Omit<React.HTMLProps<HTMLSpanElement>, 'size'>;
declare const mapClassname: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    info: string;
    indigo: string;
    warning: string;
};
declare const mapSize: {
    sm: string;
    base: string;
};
declare const Alert: React.FC<Props>;
export default Alert;
