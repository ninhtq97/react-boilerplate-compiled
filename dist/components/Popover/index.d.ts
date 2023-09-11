/// <reference types="react" />
import { Placement, Position } from 'types';
type Offset = Partial<Record<Position, number>>;
type RenderLinkProps = {
    ref: React.RefObject<HTMLElement>;
    onClick: () => void;
};
type RenderContentProps = {
    onClose: () => void;
};
type Props = {
    container?: string;
    scrollableTarget?: React.RefObject<HTMLElement>;
    placement?: Placement;
    offset?: Offset;
    onClose?: () => void;
    renderLink?: React.FC<RenderLinkProps>;
    renderContent?: React.FC<RenderContentProps>;
} & React.HTMLAttributes<HTMLElement>;
declare const Popover: React.FC<Props>;
export default Popover;
