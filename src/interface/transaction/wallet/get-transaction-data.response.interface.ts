import BlockscoutPaginationMeta from './blockscout-pagination-meta.interface';
import ITransaction from './transaction.interface';

export default interface IGetTransactionsDataResponse {
  data: ITransaction[];
  next: boolean;
  fingerprint?: string;
  blockscoutPaginationMeta?: BlockscoutPaginationMeta;
}
