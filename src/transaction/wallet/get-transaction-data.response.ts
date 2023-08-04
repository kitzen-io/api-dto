import ITransaction from './transaction.interface';

export interface IGetTransactionsDataResponse {
  data: ITransaction[];
  next: boolean;
  fingerprint?: string;
}
