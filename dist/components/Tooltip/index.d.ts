import { FC } from 'react';
import { Position } from 'types';
type Props = {
    title: string;
    position?: Position;
} & React.PropsWithChildren;
declare const Tooltip: FC<Props>;
export default Tooltip;
