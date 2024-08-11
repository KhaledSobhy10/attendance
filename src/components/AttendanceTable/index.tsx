import { convertArabicTimeToEnglish } from "@/lib/utils";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useAttendance } from "@/context/AttendanceContext";
import { toast } from "sonner";

type Props = {};

export default function AttendanceTable({}: Props) {
  const { state } = useAttendance();

  return (
    <DataTable
      columns={columns}
      data={state.attendance}
      onCellClickedHandler={(cell) => {
        navigator.clipboard.writeText(
          convertArabicTimeToEnglish(cell.getValue() as string)
        );
        toast.success("تم النسخ");
      }}
    />
  );
}
