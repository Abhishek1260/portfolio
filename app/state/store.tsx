import { create } from "zustand";

interface Store {
    showMenu: boolean
    toggleMenu: () => void
}

export const useStore = create<Store>((set) => ({
    showMenu: false,
    toggleMenu: () => set((state) => ({ showMenu: !state.showMenu }))
}))
