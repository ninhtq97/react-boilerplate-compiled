import { HeadCell } from '../components/Table';
declare const useExport: <T>(COLUMNS: HeadCell[], excelData: T[]) => {
    HEADING: {};
    excelData: T[];
    wsCols: {
        wch: number;
    }[];
};
export default useExport;
