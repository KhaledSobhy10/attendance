import { EllipsisVerticalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteRow from "./DeleteRow";
import { Attendance } from "@/types";

type Props = { row: Attendance };

export default function RowActions({ row }: Props) {
  console.log("🚀 ~ RowActions ~ row:", row);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVerticalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>تعديل</DropdownMenuItem>
        <DeleteRow date={row.date} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
