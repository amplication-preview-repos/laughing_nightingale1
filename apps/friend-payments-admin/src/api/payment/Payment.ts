export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  isConfirmed: boolean | null;
  payee: string | null;
  payer: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
