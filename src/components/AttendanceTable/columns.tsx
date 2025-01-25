import { getFormateTime } from "@/lib/utils";
import { Attendance } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import RowActions from "./RowActions";

export const columns: ColumnDef<Attendance>[] = [
  {
    accessorKey: "date",
    header: "التاريخ",
  },
  {
    accessorKey: "signInTime",
    header: "وقت الدخول",
    accessorFn: (row) => getFormateTime(row.signInTime),
  },
  {
    accessorKey: "signOutTime",
    header: "وقت الخروج",
    accessorFn: (row) => getFormateTime(row.signOutTime),
  },
  {
    accessorKey: "workTime",
    header: "وقت العمل الفعلي",
  },
  {
    accessorKey: "actions",
    header: "",
    cell: (data) => <RowActions row={data.row.original} />,
  },
];
