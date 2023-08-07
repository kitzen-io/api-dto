import { BlockchainNetworkEnum, TransactionTypeEnum } from '../../../enum';

export interface IGetTransactionsDataRequest {
  address?: string;
  network: BlockchainNetworkEnum;
  identifier: string;
  page: number;
  perPage: number;
  fingerprint?: string;
  type?: TransactionTypeEnum;
}
