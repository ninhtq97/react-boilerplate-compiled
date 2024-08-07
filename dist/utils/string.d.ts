export declare const capitalize: (str: string) => string;
export declare const toFixedNumber: (num: number, decimals?: number) => number;
export declare const toSlug: (str: string, options?: {
    replacement?: string;
    remove?: RegExp;
    lower?: boolean;
    strict?: boolean;
    locale?: string;
    trim?: boolean;
}) => string;
export declare const toIntlNumber: (amount: string | number, locales?: string, options?: Intl.NumberFormatOptions) => string;
export declare const toCurrency: (amount: string | number, currency?: string) => string;
export declare const toLocaleNumber: (amount: string, locales?: string) => number;
