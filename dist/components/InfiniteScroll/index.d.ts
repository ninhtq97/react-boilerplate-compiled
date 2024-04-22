/// <reference types="react" />
type Props = {
    inverse?: boolean;
    loading: boolean;
    hasMore: boolean;
    onNext: () => void;
    loader?: React.ReactNode;
} & React.HTMLProps<HTMLElement>;
declare const InfiniteScroll: React.FC<Props>;
export default InfiniteScroll;
