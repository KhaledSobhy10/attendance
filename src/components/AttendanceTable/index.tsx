import { convertArabicTimeToEnglish } from "@/lib/utils";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useAttendance } from "@/context/AttendanceContext";

type Props = {};

export default function AttendanceTable({}: Props) {
  const { state } = useAttendance();

  return (
    <DataTable
      columns={columns}
      data={state.attendance}
      onCellClickedHandler={(cell) => {
        if (cell.column.id.includes("sign")) {
          navigator.clipboard.writeText(
            convertArabicTimeToEnglish(cell.getValue() as string)
          );
        }
        if (cell.column.id === "actions") {
        }
      }}
    />
  );
}
