import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateFakeUsers } from "../utils";
import type { User } from "../types";

interface UserState {
  users: User[];
  addUser: (user: User) => void;
  setUsers: (users: User[]) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      users: generateFakeUsers(),
      addUser: (user) =>
        set((state) => ({
          users: [user, ...state.users],
        })),
      setUsers: (users) => set({ users }),
    }),
    {
      name: "evreka_users",
    }
  )
);
