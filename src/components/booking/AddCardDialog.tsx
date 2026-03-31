import useAddCard, { type CardData } from "@/hooks/useAddCard";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { useForm } from "react-hook-form";
import {
  AddNewCardSchema,
  type AddNewCardType,
} from "@/lib/schemas/AddNewCardSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import AddCardInput from "./AddCardInput";

type AddCardDialogProps = {
  isCardModalOpen: boolean;
  setIsCardModalOpen: (isCardModalOpen: boolean) => void;
  onCardAdded: (cardDetails: CardData) => void;
};

const AddCardDialog = ({
  isCardModalOpen,
  setIsCardModalOpen,
}: AddCardDialogProps) => {
  const { mutate, isPending, isSuccess } = useAddCard();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddNewCardType>({
    resolver: zodResolver(AddNewCardSchema),
  });

  const onSubmit = (data: AddNewCardType) => {
    mutate(data);
    if (isSuccess) {
      reset();
    }
  };

  return (
    <Dialog open={isCardModalOpen} onOpenChange={setIsCardModalOpen}>
      <DialogContent className="bg-gray-950 border-gray-600 sm:max-w-2xl text-white">
        <div className="space-y-6 py-2">
          <h1 className="text-2xl font-bold text-center">Add New Card</h1>
          <div>
            <AddCardInput
              id="cardNumber"
              type="text"
              placeholder="1234 5678 9012 3456"
              register={register("cardNumber")}
              error={errors.cardNumber?.message}
            />
          </div>
          <div>
            <AddCardInput
              id="cardName"
              type="text"
              placeholder="John Doe"
              register={register("cardName")}
              error={errors.cardName?.message}
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <AddCardInput
                id="expiry"
                type="text"
                placeholder="MM/YY"
                register={register("expiry")}
                error={errors.expiry?.message}
              />
            </div>
            <div className="w-1/2">
              <AddCardInput
                id="cvv"
                type="text"
                placeholder="123"
                register={register("cvv")}
                error={errors.cvv?.message}
              />
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-stretch gap-2 mt-2">
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isPending}
            className="w-full px-4 py-2 rounded-md bg-orange text-white text-sm font-bold shadow-md hover:bg-orange/90 transition-colors cursor-pointer disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Card"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddCardDialog;
