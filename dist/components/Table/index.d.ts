/// <reference types="react" />
export type HeadCell = {
    id: string;
    label: string | React.ReactNode;
} & React.ThHTMLAttributes<HTMLTableCellElement>;
type Props = {
    columns?: HeadCell[];
} & React.HTMLAttributes<HTMLElement>;
declare const Table: React.FC<Props>;
export default Table;
