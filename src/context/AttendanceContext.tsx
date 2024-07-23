import { getAllFormattedAttendance } from "@/services/attendance";
import { Attendance } from "@/types";
import React, { createContext, useReducer,  ReactNode, useContext } from "react";

type AttendanceState = {
  attendance: Attendance[];
};

type AttendanceAction = { type: "FETCH_ATTENDANCE" };

type AttendanceContextType = {
  state: AttendanceState;
  dispatch: React.Dispatch<AttendanceAction>;
};
const AttendanceContext = createContext<AttendanceContextType | undefined>(
  undefined
);

const initialState: AttendanceState = {
  attendance: getAllFormattedAttendance()
};

function attendanceReducer(
  state: AttendanceState,
  action: AttendanceAction
): AttendanceState {
  switch (action.type) {
    case "FETCH_ATTENDANCE":
      return { attendance: getAllFormattedAttendance() };
    default:
      return state;
  }
}


type Props = {children:ReactNode}

export const AttendanceProvider= ({ children }: Props) => {
  const [state, dispatch] = useReducer(attendanceReducer, initialState);



  return (
    <AttendanceContext.Provider value={{ state, dispatch }}>
      {children}
    </AttendanceContext.Provider>
  );
};


export const useAttendance = () => {
    const context = useContext(AttendanceContext);
    if (context === undefined) {
      throw new Error('useAttendance must be used within an AttendanceProvider');
    }
    return context;
  };