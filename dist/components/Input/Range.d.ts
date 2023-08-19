/// <reference types="react" />
type Props = {
    min?: number;
    max?: number;
    format?: 'value' | 'percent';
    withRangeText?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
declare const Range: React.FC<Props>;
export default Range;
