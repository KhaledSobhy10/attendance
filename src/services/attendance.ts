import { AttendanceEvent } from "@/enums";
import { getCurrentDate, getHoursBetweenTwoDates } from "@/lib/utils";
import { Attendance, StoredAttendance } from "@/types";

const LOCAL_STORAGE_KEY = "attendance";

// Function to update attendance
export function updateAttendance(event: AttendanceEvent): number {
  const currentDate = getCurrentDate();
  const currentTime = Date.now();

  // Retrieve attendance from local storage
  const storedAttendance = localStorage.getItem(LOCAL_STORAGE_KEY);
  let attendance: StoredAttendance = storedAttendance
    ? JSON.parse(storedAttendance)
    : {};

  // Ensure there's an attendance record for the current date
  if (!attendance[currentDate]) {
    attendance[currentDate] = {};
  }

  // Update the attendance record for the current date
  attendance[currentDate][event] = currentTime;

  // Save the updated attendance back to local storage
  localStorage.setItem("attendance", JSON.stringify(attendance));

  return currentTime;
}

export function getActuallyWorkTime() {
  const currentDate = getCurrentDate();
  // Retrieve attendance from local storage
  const storedAttendance = localStorage.getItem(LOCAL_STORAGE_KEY);
  let attendance: StoredAttendance = storedAttendance
    ? JSON.parse(storedAttendance)
    : {};
  const signInTime = attendance[currentDate][AttendanceEvent.SIGN_IN] || 0;
  const signOutTime = attendance[currentDate][AttendanceEvent.SIGN_OUT] || 0;

  const { workHours, workMinutes } = getHoursBetweenTwoDates(
    signInTime,
    signOutTime
  );

  return `${workHours} س ${workMinutes}د`;
}

export function getAllFormattedAttendance(): Attendance[] {
    const storedAttendance = localStorage.getItem("attendance");
    if (!storedAttendance) return [];
  
    const attendance: StoredAttendance = JSON.parse(storedAttendance);
    const formattedAttendance: Attendance[] = [];
  
    for (const date in attendance) {
      const record = attendance[date];
      if (record[AttendanceEvent.SIGN_IN] && record[AttendanceEvent.SIGN_OUT]) {
        const signInTime = record[AttendanceEvent.SIGN_IN];
        const signOutTime = record[AttendanceEvent.SIGN_OUT];
        const { workHours, workMinutes } = getHoursBetweenTwoDates(
          signInTime,
          signOutTime
        );
  
        formattedAttendance.push({
          date,
          signInTime,
          signOutTime,
          workTime: `${workHours}س ${workMinutes}د`,
        });
      }
    }
    console.count()
    return formattedAttendance;
  }