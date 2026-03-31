import { z } from "zod";

const AddNewCardSchema = z.object({
  cardNumber: z
    .string()
    .nonempty("Card Number is required")
    .max(255, "Card Number is too long"),
  holderName: z
    .string()
    .nonempty("Holder Name is required")
    .max(255, "Holder Name is too long"),
  expiry: z.string().nonempty("Expiry is required"),
  cvv: z.string().nonempty("CVV is required").max(3, "CVV is too long"),
  cardName: z
    .string()
    .nonempty("Card Name is required")
    .max(16, "Card Name is too long"),
});

type AddNewCardType = z.infer<typeof AddNewCardSchema>;

export { type AddNewCardType, AddNewCardSchema };
