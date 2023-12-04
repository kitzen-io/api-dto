import { BlockchainNetworkEnum, TransactionTypeEnum } from '../../../enum';
import BlockscoutPaginationMeta from './blockscout-pagentaion-meta.interface';


export default interface IGetTransactionsDataRequest {
  network: BlockchainNetworkEnum;
  identifier?: string;

  page: number;
  perPage: number;

  address?: string;
  fingerprint?: string;
  type?: TransactionTypeEnum;

  blockscoutPaginationMeta?: BlockscoutPaginationMeta;
}
