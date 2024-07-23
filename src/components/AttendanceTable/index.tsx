import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useAttendance } from "@/context/AttendanceContext";

type Props = {};



export default function AttendanceTable({}: Props) {
const {state} =   useAttendance();

  return <DataTable columns={columns} data={state.attendance} />;
}
