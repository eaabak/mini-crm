import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "../types";

interface SelectedUserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useSelectedUserStore = create<SelectedUserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "user_detail",
    }
  )
);
