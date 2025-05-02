import { create } from "zustand";

export const useStore = create((set) => ({
    store: [],
    setStore: (store) => set({ store }),
    createStore: async (newStore) => {
        if(!newStore.name || !newStore.image){
            return {success: false, message: "Please fill all the fields."}
        }
        const res = await fetch("/api/stores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStore),
        })
        const data = await res.json();
        set((state) => ({ store: [...state.store, data.data] }))
        return {success: true, message: "Store created successfully."}
    }
}))