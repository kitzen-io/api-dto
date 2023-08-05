import { CoinsEnum, TransactionTypeEnum } from '../../../enum';

export interface IGetTransactionsDataRequest {
  address?: string;
  coin: CoinsEnum;
  page: number;
  perPage: number;
  fingerprint?: string;
  type?: TransactionTypeEnum;
}
