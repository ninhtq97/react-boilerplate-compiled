/// <reference types="react" />
type Tab = {
    label: string;
    content: React.ReactNode;
};
type Props = {
    tabs: Tab[];
};
declare const Tabs: React.FC<Props>;
export default Tabs;
