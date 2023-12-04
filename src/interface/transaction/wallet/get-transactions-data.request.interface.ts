import { BlockchainNetworkEnum, TransactionTypeEnum } from '../../../enum';
import BlosckoutPaginationMeta from './blickscout-pagentaion-meta.interface';


export default interface IGetTransactionsDataRequest {
  network: BlockchainNetworkEnum;
  identifier?: string;

  page: number;
  perPage: number;

  address?: string;
  fingerprint?: string;
  type?: TransactionTypeEnum;

  blosckoutPaginationMeta?: BlosckoutPaginationMeta;
}
