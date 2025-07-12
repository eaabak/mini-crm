import { faker } from "@faker-js/faker";
import type { User } from "./types";

const KEY = "evreka_users";

export function generateFakeUsers(count: number = 5000): User[] {
  return Array.from({ length: count }, () => ({
    id: crypto.randomUUID(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.helpers.arrayElement(["Admin", "Manager", "User"]),
    isActive: faker.datatype.boolean(),
    createdAt: new Date().toISOString(),
    latitude: parseFloat(faker.location.latitude().toString()),
    longitude: parseFloat(faker.location.longitude().toString()),
  }));
}

export function getUsers(): User[] {
  const stored = localStorage.getItem(KEY);
  if (stored) return JSON.parse(stored);
  const users = generateFakeUsers();
  localStorage.setItem(KEY, JSON.stringify(users));
  return users;
}

export function saveUsers(users: User[]) {
  localStorage.setItem(KEY, JSON.stringify(users));
}
