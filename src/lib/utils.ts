import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


 // Utility function to get the current date in "DD-MM-YYYY" format
 export function getCurrentDate(): string {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
}


export function getFormateTime (date?: number | Date | undefined):string{
  return Intl.DateTimeFormat('ar-EG', { hour: '2-digit', minute: '2-digit', hour12: true }).format(date)
}


export function getHoursBetweenTwoDates (firstTime:number,secondTime:number){
  const workTimeMs = secondTime - firstTime;
  const workHours = Math.floor(workTimeMs / (1000 * 60 * 60));
  const workMinutes = Math.floor((workTimeMs % (1000 * 60 * 60)) / (1000 * 60));

  return {workHours,workMinutes}
}