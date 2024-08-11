import { Button } from "@/components/ui/button";
import useUpdateAttendance from "@/hooks/useUpdateAttendance";
import { useState } from "react";
import { AreSureAlert } from "./AreSureAlert";
import { isExistEvent } from "@/services/attendance";
import { AttendanceEvent } from "@/enums";

type Props = {};

export default function Actions({}: Props) {
  const { signIn, signOut } = useUpdateAttendance({});
  const [alert, setAlert] = useState({
    open: false,
    onCancel: () => {},
    onContinue: () => {},
  });

  return (
    <div className="flex justify-between w-full">
      <Button
        variant="success"
        onClick={() => {
          if (isExistEvent(AttendanceEvent.SIGN_IN)) {
            setAlert({
              open: true,
              onContinue: () => {
                signIn();
              },
              onCancel: () => {},
            });
          } else {
            signIn();
          }
        }}
      >
        دخول
      </Button>

      <Button
        variant={"destructive"}
        onClick={() => {
          if (isExistEvent(AttendanceEvent.SIGN_OUT)) {
            setAlert({
              open: true,
              onContinue: () => {
                signOut();
              },
              onCancel: () => {},
            });
          } else {
            signOut();
          }
        }}
      >
        خروج
      </Button>
      <AreSureAlert
        open={alert.open}
        setOpen={(open) => {
          setAlert({ open, onCancel: () => {}, onContinue: () => {} });
        }}
        description="سوف يتم التعديل على الوقت الحالي"
        onCancelHandler={alert.onCancel}
        onContinueHandler={alert.onContinue}
      />
    </div>
  );
}
