import { useAttendance } from "@/context/AttendanceContext";
import { AttendanceEvent } from "@/enums";
import {
  getFormateTime,
} from "@/lib/utils";
import { getActuallyWorkTime, updateAttendance } from "@/services/attendance";
import { toast } from "sonner";



type HookProps = {};
export default function useUpdateAttendance({}: HookProps) {
  const { dispatch } = useAttendance();

  const signIn = () => {
    const currentTime = updateAttendance(AttendanceEvent.SIGN_IN);
    toast("👋🏽 أهلًا وسهلًا", {
      closeButton: true,
      description: ` تم تسجيل الدخول الساعة ${getFormateTime(currentTime)}`,
    });
    dispatch({ type: "FETCH_ATTENDANCE" });
  };

  const signOut = () => {
    const currentTime = updateAttendance(AttendanceEvent.SIGN_OUT);
    toast("👋🏽 سلام", {
      description: (
        <div className="flex flex-col gap-2 mt-2">
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            {` تم تسجيل الخروج الساعة : ${getFormateTime(currentTime)}`}
          </span>
          <span className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            {`وقت العمل الفعلي : ${getActuallyWorkTime()}`}{" "}
          </span>
        </div>
      ),
      duration: 5000,
      closeButton: true,
    });
    dispatch({ type: "FETCH_ATTENDANCE" });
  };

  return { signIn, signOut };
}
