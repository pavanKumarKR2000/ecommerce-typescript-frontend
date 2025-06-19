import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertTitle } from "../ui/alert";
import { IconAlertCircle } from "@tabler/icons-react";

interface DeleteDialogProps {
  title: string;
  action: (id: number) => void;
}

const DeleteDialog = ({ title, action }: DeleteDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader className="mt-4">
          <DialogTitle>
            <Alert variant="destructive" className="border-none!">
              <AlertTitle className="flex items-center justify-center gap-2 font-medium! text-lg">
                <IconAlertCircle />
                <span>{title}</span>
              </AlertTitle>
            </Alert>
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="w-full ">
          <div className="w-full flex items-center justify-center gap-2">
            <Button variant="destructive">Delete</Button>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
