import { AxiosRequestConfig } from 'axios';
declare const api: {
    get: (url?: string | undefined, variables?: Record<string, any> | undefined, config?: AxiosRequestConfig<any> | undefined) => Promise<any>;
    post: (url?: string | undefined, variables?: Record<string, any> | undefined, config?: AxiosRequestConfig<any> | undefined) => Promise<any>;
    put: (url?: string | undefined, variables?: Record<string, any> | undefined, config?: AxiosRequestConfig<any> | undefined) => Promise<any>;
    patch: (url?: string | undefined, variables?: Record<string, any> | undefined, config?: AxiosRequestConfig<any> | undefined) => Promise<any>;
    delete: (url?: string | undefined, variables?: Record<string, any> | undefined, config?: AxiosRequestConfig<any> | undefined) => Promise<any>;
};
export default api;
