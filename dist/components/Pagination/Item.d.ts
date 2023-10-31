/// <reference types="react" />
type Props = {
    current?: number;
    number?: number;
    onClick: () => void;
} & React.PropsWithChildren;
declare const Item: React.FC<Props>;
export default Item;
