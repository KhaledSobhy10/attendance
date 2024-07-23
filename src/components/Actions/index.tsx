import { Button } from "@/components/ui/button";
import useUpdateAttendance from '@/hooks/useUpdateAttendance';

type Props = {}

export default function Actions({}: Props) {
    const { signIn, signOut } = useUpdateAttendance({});

  return (
    <div className="flex justify-between w-full">
    <Button
      variant="success"
      onClick={() => {
        signIn();
      }}
    >
      دخول
    </Button>

    <Button
      variant={"destructive"}
      onClick={() => {
        signOut();
      }}
    >
      خروج
    </Button>
  </div>  )
}