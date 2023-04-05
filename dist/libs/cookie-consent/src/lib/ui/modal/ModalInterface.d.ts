import { ReactNode } from 'react';
export interface ModalInterface {
    show: boolean;
    onClose: VoidFunction;
    children: ReactNode;
}
