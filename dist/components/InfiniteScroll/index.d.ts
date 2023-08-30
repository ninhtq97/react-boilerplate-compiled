/// <reference types="react" />
declare const InfiniteScroll: import("react").ForwardRefExoticComponent<{
    isLoading: boolean;
    hasMore: boolean;
    onNext: () => void;
    loader?: React.ReactNode;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLElement>>;
export default InfiniteScroll;
