type ErrorWithMessage = {
    message: string;
};
export declare const isErrorWithMessage: (error: unknown) => error is ErrorWithMessage;
export declare const toErrorWithMessage: (error: unknown) => ErrorWithMessage;
export declare const getErrorMessage: (error: unknown) => string;
export {};
