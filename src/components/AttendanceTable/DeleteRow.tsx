import { DropdownMenuItem } from "../ui/dropdown-menu";
import { removeAttendance } from "@/services/attendance";
import { useAttendance } from "@/context/AttendanceContext";

type Props = { date: string };

export default function DeleteRow({ date }: Props) {
  const { dispatch } = useAttendance();

  return (
    <DropdownMenuItem
      onClick={() => {
        removeAttendance(date);
        dispatch({ type: "FETCH_ATTENDANCE" });
      }}
    >
      مسح
    </DropdownMenuItem>
  );
}
