import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ReactNode } from "react";

type Props = {
  open: boolean;
  description: ReactNode;
  onContinueHandler: () => void;
  onCancelHandler: () => void;
  setOpen: (open: boolean) => void;
};
export function AreSureAlert({
  description,
  onContinueHandler,
  onCancelHandler,
  open,
  setOpen,
}: Props) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>هل انت متاكد؟</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancelHandler}>إلغاء</AlertDialogCancel>
          <AlertDialogAction onClick={onContinueHandler}>
            موافق
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
