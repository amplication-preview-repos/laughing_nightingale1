import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isConfirmed?: SortOrder;
  payee?: SortOrder;
  payer?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
