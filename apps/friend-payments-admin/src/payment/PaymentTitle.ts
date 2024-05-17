import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "payee";

export const PaymentTitle = (record: TPayment): string => {
  return record.payee?.toString() || String(record.id);
};
