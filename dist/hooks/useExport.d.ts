import { HeadCell } from 'types';
declare const useExport: (COLUMNS: HeadCell[]) => {
    onExport: <T>(data: T[], fileName: string) => void;
};
export default useExport;
