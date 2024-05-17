export type PaymentUpdateInput = {
  amount?: number | null;
  isConfirmed?: boolean | null;
  payee?: string | null;
  payer?: string | null;
  timestamp?: Date | null;
};
