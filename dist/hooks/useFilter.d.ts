import { TFilter } from 'types';
declare const useFilter: (state?: Partial<TFilter>) => {
    filter: TFilter;
    onChangeFilter: (data: Partial<TFilter>) => void;
};
export default useFilter;
