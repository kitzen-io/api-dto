import { BlockchainNetworkEnum, TransactionTypeEnum } from '../../../enum';

export interface IGetTransactionsDataRequest {
  network: BlockchainNetworkEnum;
  identifier: string;

  page: number;
  perPage: number;

  address?: string;
  fingerprint?: string;
  type?: TransactionTypeEnum;
}
