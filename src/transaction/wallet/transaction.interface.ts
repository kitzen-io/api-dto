import { TransactionStatusEnum, TransactionTypeEnum } from '../../enum';

export default interface ITransaction {
  userId?: string;
  txId: string;
  amount: string;
  type: TransactionTypeEnum;
  fromAddress: string;
  toAddress: string;
  createdAt: Date;
  status: TransactionStatusEnum;
}
