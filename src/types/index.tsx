import { AttendanceEvent } from "@/enums"


export type Attendance = {
    date:string
    signOutTime:number
    signInTime:number
    workTime:string
}

export type AttendanceRecord = {
    [AttendanceEvent.SIGN_IN]?: number;
    [AttendanceEvent.SIGN_OUT]?: number;
  };
  
  export type StoredAttendance = {
    [date: string]: AttendanceRecord;
  };