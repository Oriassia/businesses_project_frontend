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
import { deleteReview } from "../../../../store/actions/review.actions";
import { useAppDispatch } from "../../../../store/storeIndex";

interface AlertDialogProps {
  showAlertDialog: boolean;
  reviewId: string;
  setShowAlertDialog: (value: boolean) => void;
}

export function AlertDialogComp({
  showAlertDialog,
  reviewId,
  setShowAlertDialog,
}: AlertDialogProps) {
  const dispatch = useAppDispatch();

  return (
    <AlertDialog open={showAlertDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setShowAlertDialog(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => dispatch(deleteReview(reviewId))}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
