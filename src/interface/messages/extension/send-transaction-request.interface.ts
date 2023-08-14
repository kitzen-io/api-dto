import { TransactionRequestStatus } from '../../../enum';

export interface ISendTransactionRequestExtensionMessageData {
  status: TransactionRequestStatus;
  origin: string;
}
