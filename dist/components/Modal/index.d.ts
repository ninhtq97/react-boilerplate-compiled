/// <reference types="react" />
type TRenderLink = {
    onOpen: () => void;
};
type TRenderContent = {
    onClose: () => void;
};
type Props = {
    container?: string;
    width?: number;
    withCloseIcon?: boolean;
    backdropDisabled?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
    renderLink?: React.FC<TRenderLink>;
    renderHeader?: React.FC;
    renderContent?: React.FC<TRenderContent>;
    renderFooter?: React.FC<TRenderContent>;
} & React.HTMLProps<HTMLElement>;
declare const Modal: React.FC<Props>;
export default Modal;
