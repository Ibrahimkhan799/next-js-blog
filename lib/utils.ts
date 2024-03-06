import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Typedate = "dd/mm/yy" | "D M Y";

export function formatDate(dateString : string, type : Typedate) {
 const date = new Date(dateString);
 const d = date.getUTCDate();
 const m = date.getUTCMonth();
 const y = date.getUTCFullYear();
 if (type === "dd/mm/yy") 
  return `${String(d).padStart(2,'0')}/${String(m + 1).padStart(2,'0')}/${String(y % 100).padStart(2,'0')}`;
 else if (type === "D M Y")
    return `${d} ${Months[m]} ${y}`;
  else 
    throw `Invalid date type ${type}`;
}

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]