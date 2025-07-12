export type Role = "Admin" | "Manager" | "User";
export type ViewMode = "table" | "card";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
  latitude: number;
  longitude: number;
}
export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("tr-TR");
}
