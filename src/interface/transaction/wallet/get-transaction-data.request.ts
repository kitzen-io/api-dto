import { TransactionTypeEnum } from '../../../enum';

export interface IGetTransactionsDataRequest {
  address?: string;
  page: number;
  perPage: number;
  fingerprint?: string;
  type?: TransactionTypeEnum;
}
