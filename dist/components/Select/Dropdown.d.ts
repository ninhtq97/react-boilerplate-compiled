/// <reference types="react" />
import { Option } from 'types';
type Props = {
    isControlled: boolean;
    value: Option[];
    options: Option[];
    onChange: (selected: Option) => void;
    deactivateDropdown: () => void;
    loading: boolean;
    filterSearch: boolean;
    searchValue: string;
    setSearchValue: (keyword: string) => void;
};
declare const Dropdown: React.FC<Props>;
export default Dropdown;
