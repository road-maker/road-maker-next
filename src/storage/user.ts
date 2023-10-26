import { User } from "@/pages/users/types";

const USER_LOCALSTORAGE_KEY = "user";

// helper to get user from localstorage
export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null;

  const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user: User): void {
  if (typeof window !== "undefined")
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  if (typeof window !== "undefined")
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}
