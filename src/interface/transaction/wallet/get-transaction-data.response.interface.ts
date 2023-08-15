import ITransaction from './transaction.interface';

export default interface IGetTransactionsDataResponse {
  data: ITransaction[];
  next: boolean;
  fingerprint?: string;
}
