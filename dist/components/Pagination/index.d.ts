/// <reference types="react" />
import { TFilter } from 'types';
type Props = {
    current: number;
    currentSize?: number;
    total: number;
    totalItem: number;
    onChange: (attrs: Partial<TFilter>) => void;
    withChangeSize?: boolean;
    sizeLable?: string;
};
declare const Pagination: React.FC<Props>;
export default Pagination;
