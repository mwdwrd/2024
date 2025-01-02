import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const aspectRatios = {
  cinema: 2.39/1,    // ~2.39:1
  widescreen: 16/9,  // 1.77:1
  standard: 4/3,     // 1.33:1
  photo: 6/4,        // 1.5:1
  square: 1          // 1:1
} as const;

export type AspectRatioType = keyof typeof aspectRatios;
