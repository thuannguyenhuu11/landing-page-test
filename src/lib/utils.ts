import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatHours = (item: string) => {
  const date = new Date(item);
  const hours = date.getHours().toString().padStart(2, "0");
  return hours;
};

export const formatPrice = (price: string) => {
  if (Number(price) >= 1e9) {
    return (Number(price) / 1e9).toFixed(2) + "B";
  } else if (Number(price) >= 1e6) {
    return (Number(price) / 1e6).toFixed(2) + "M";
  } else {
    return price.toString();
  }
};
