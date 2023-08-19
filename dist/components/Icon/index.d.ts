/// <reference types="react" />
type Props = {
    tag?: React.ElementType;
    clickable?: boolean;
    icon: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;
export declare const Icon: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLElement>>;
type IconProps = {} & React.HTMLProps<SVGSVGElement>;
export declare const ChevronDown: React.FC<IconProps>;
export declare const Times: React.FC<IconProps>;
export declare const Spinner: React.FC<IconProps>;
export declare const Search: React.FC<IconProps>;
export declare const ArrowLeft: React.FC<IconProps>;
export declare const ArrowRight: React.FC<IconProps>;
export declare const Check: React.FC<IconProps>;
export declare const Plus: React.FC<IconProps>;
export declare const EyeOff: React.FC<IconProps>;
export declare const Eye: React.FC<IconProps>;
export {};
