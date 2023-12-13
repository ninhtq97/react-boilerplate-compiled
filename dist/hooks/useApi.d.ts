declare const useApi: (redirectUrl: string, storeKey: string) => {
    onCallWithCatchError: <T extends Function>(callFn: T) => Promise<T | null>;
    loading: boolean;
};
export default useApi;
