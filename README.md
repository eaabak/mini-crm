
# Mini CRM – User Management Interface

A modern user management panel built with **React**, **TypeScript**, **Zustand**, and **Leaflet**.

##  Project Structure

This project follows a **feature-based folder structure** for better modularity and scalability.

```
src/
├── components/
│       └── ui/
├── features/
│   └── users/
│       ├── components/
│       ├── schema/
│       ├── pages/
│       ├── store/
│       ├── types
│       └── utils
├── types/
├── utils/
└── App.tsx
```

## Tech Stack

- **React**
- **React Router**
- **TypeScript**
- **Styled-components**
- **Zustand (with persist middleware)**
- **Leaflet.js**
- **React-Icons**
- **zod (for validation form)**
- **useForm**


## State Management

- Global state is managed via **Zustand**, with the `persist` middleware to store user data in `localStorage`.
- A utility function generates **mock users** on the initial load using `faker`.

```ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
      name: "evreka_users", // localStorage key
    }
  )
);
```

## Features

- **Card and Table View Toggle**
- **Responsive Design**
- **User Detail Page with Map and Custom Marker**
- **Open Popup with User Info**
- **Search, Pagination, Add User**
- **"User Not Found" fallback with stylish error state**
- **Persistent Zustand store with no external database**

## Leaflet Map Integration

- Shows each user location on the map.
- Uses **custom SVG marker icons**.
- User info displayed in a **popup tooltip**, always open by default.

## Data

- All user data is generated locally with `faker`.
- No backend API or database integration is required.

##  Installation

```bash
npm install
npm run dev
```