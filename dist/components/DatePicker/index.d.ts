/// <reference types="react" />
import Datepicker from 'react-tailwindcss-datepicker';
type Props = {
    error?: boolean;
    helperText?: string;
} & React.ComponentProps<typeof Datepicker>;
declare const CustomDatePicker: React.FC<Props>;
export default CustomDatePicker;
