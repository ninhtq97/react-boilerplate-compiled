/// <reference types="react" />
type Props = {} & Omit<React.HTMLProps<HTMLSpanElement>, 'size'>;
declare const Alert: React.FC<Props>;
export default Alert;
