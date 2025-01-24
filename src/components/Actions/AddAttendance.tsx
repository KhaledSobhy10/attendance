import React, { useState } from "react";
import { format, formatDate } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { getCurrentDate, getHoursBetweenTwoDates } from "@/lib/utils";
import useUpdateAttendance from "@/hooks/useUpdateAttendance";

const AddAttendance: React.FC = () => {
  const { signIn, signOut } = useUpdateAttendance({});

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toString()
  );
  const [selectedDateOut, setSelectedDateOut] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);

  const actualTime = getHoursBetweenTwoDates(
    new Date(selectedDate).getTime(),
    new Date(selectedDateOut).getTime()
  );
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="btn-primary gap-1">
          اضافة وقت <PlusCircle />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogDescription> </DialogDescription>
        <DialogHeader>
          <DialogTitle>اضافة بيانات يدوية</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="in">دخول</Label>

          <Input
            id="in"
            type="datetime-local"
            dir="rtl"
            onChange={(e) => setSelectedDate(e.target.value)}
            value={selectedDate || ""}
          />
        </div>
        <div>
          <Label htmlFor="out">خروج</Label>

          <Input
            id="out"
            type="datetime-local"
            dir="rtl"
            min={selectedDate}
            onChange={(e) => setSelectedDateOut(e.target.value)}
            value={selectedDateOut || ""}
          />
        </div>
        {selectedDateOut && selectedDate ? (
          <Badge
            className={`${
              actualTime.workHours >= 8 ? "bg-green-600" : "bg-red-600"
            } w-fit`}
          >{`${actualTime.workHours} س : ${actualTime.workMinutes} د`}</Badge>
        ) : null}
        <DialogFooter>
          <Button
            onClick={() => {
              const inDate = new Date(selectedDate);
              const outDate = new Date(selectedDateOut);

              signIn(formatDate(inDate, "yyyy-MM-dd"), inDate.getTime());
              signOut(formatDate(outDate, "yyyy-MM-dd"), outDate.getTime());
              setIsOpen(false);
            }}
          >
            حفظ
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAttendance;
