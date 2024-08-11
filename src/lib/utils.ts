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


export function getFormateTime(
  date?: number | Date | undefined,
  local = "ar-eg"
): string {
  return Intl.DateTimeFormat(local, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}


export function getHoursBetweenTwoDates (firstTime:number,secondTime:number){
  const workTimeMs = secondTime - firstTime;
  const workHours = Math.floor(workTimeMs / (1000 * 60 * 60));
  const workMinutes = Math.floor((workTimeMs % (1000 * 60 * 60)) / (1000 * 60));

  return {workHours,workMinutes}
}


export function convertArabicTimeToEnglish(arabicTime: string): string {
  // Define mappings for Arabic numerals to English numerals
  const arabicToEnglishMap: { [key: string]: string } = {
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };

  // Convert Arabic numerals to English numerals
  let englishTime = arabicTime.replace(
    /[٠-٩]/g,
    (digit) => arabicToEnglishMap[digit]
  );

  // Replace Arabic AM/PM with English AM/PM
  englishTime = englishTime.replace("ص", "AM").replace("م", "PM");

  return englishTime;
}


