/// <reference types="react" />
import { Input } from '.';
type Props = {} & React.ComponentProps<typeof Input>;
declare const InputPassword: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default InputPassword;
