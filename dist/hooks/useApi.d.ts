declare const useApi: () => {
    isLoading: boolean;
    onCallWithCatchError: <T extends Function>(callFn: T) => Promise<T>;
};
export default useApi;
