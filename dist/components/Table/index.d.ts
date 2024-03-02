/// <reference types="react" />
import { HeadCell } from 'types';
type Props = {
    columns?: HeadCell[];
} & React.HTMLAttributes<HTMLElement>;
declare const Table: React.FC<Props>;
export default Table;
