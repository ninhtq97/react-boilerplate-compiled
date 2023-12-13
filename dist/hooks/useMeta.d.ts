import { TMeta } from 'types';
declare const useMeta: (state?: Partial<TMeta>) => {
    meta: TMeta;
    onChangeMeta: (data: Partial<TMeta>) => void;
};
export default useMeta;
