import TransactionRequestStatusEnum from '../../enum/transaction/transaction-request-status.enum';

export default interface ISignTransactionResult {
  status: TransactionRequestStatusEnum;

  error?: string;

  psbtBase64?: string;
}
