import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key: string) => {
  const value = JSON.parse(localStorage.getItem(key)!);
  return value && value;
};

const removeItem = (key: string) => {
  if (getItem(key)) localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

export { cn, setItem, getItem, removeItem, clearStorage };
