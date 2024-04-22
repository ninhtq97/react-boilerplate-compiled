import { TFilter } from 'types';
declare const useFilter: <T extends Object>(state?: Partial<T>) => {
    filter: TFilter;
    onChangeFilter: (data: Partial<TFilter>) => void;
};
export default useFilter;
