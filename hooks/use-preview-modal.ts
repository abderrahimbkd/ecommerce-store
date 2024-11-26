import { create } from 'zustand';
import { Product } from '@/types';

interface PreviewModalStore{
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
};

const usePreviawModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data, isOpen: true }),
    onClose:()=>set({isOpen:false})
}))
export default usePreviawModal