import { TFilter, TMeta } from 'types';
export declare enum DATE_FORMAT {
    DATE = "dd/MM/yyyy",
    DATE_TIME = "dd/MM/yyyy - HH:mm:ss",
    EN_DATE = "yyyy-MM-dd",
    TIME = "HH:mm",
    HALF_TIME = "hh:mm a",
    FULLTIME = "HH:mm:ss",
    PICKER = "DD/MM/YYYY"
}
export declare const PAGE: {
    NUMBER: number;
    SIZE: number;
};
export declare const MIME_TYPE: {
    IMG: string[];
    DOCS: string[];
    EXCEL: string[];
};
export declare const INIT_META: TMeta;
export declare const INIT_FILTER: TFilter;
