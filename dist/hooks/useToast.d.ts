import { SweetAlertIcon } from 'sweetalert2';
declare const useToast: () => {
    onFire: (variant?: SweetAlertIcon, title?: string | HTMLElement | JQuery) => Promise<void>;
};
export default useToast;
