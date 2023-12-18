import BlockscoutTokenPaginationMeta from './blockscout-token-pagination-meta.interface';
import BlockscoutCoinPaginationMeta from './blockscout-coin-pagination-meta.interface';
import ITransaction from './transaction.interface';

export default interface IGetTransactionsDataResponse {
  data: ITransaction[];
  next: boolean;
  fingerprint?: string;
  blockscoutCoinPaginationMeta?: BlockscoutCoinPaginationMeta;
  blockscoutTokenPaginationMeta?: BlockscoutTokenPaginationMeta;
}
