import React from 'react';
export type Props = {
    className?: string;
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
};
declare const InputOtp: React.FC<Props>;
export default InputOtp;
