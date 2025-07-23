import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const refineImagePath = (imageUrl: string): string => {
  const cleanUrl = imageUrl.replace(/([^:]\/)\/+/g, "$1");
  return cleanUrl;
};
