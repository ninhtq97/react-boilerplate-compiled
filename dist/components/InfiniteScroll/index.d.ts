import { PropsWithChildren } from 'react';
type Props = {
    isLoading: boolean;
    hasMore: boolean;
    onNext: () => void;
    loader?: React.ReactNode;
} & PropsWithChildren;
declare const InfiniteScroll: React.FC<Props>;
export default InfiniteScroll;
