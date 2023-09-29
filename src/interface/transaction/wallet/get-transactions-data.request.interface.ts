import { BlockchainNetworkEnum, TransactionTypeEnum } from '../../../enum';

export default interface IGetTransactionsDataRequest {
  network: BlockchainNetworkEnum;
  identifier?: string;

  page: number;
  perPage: number;

  address?: string;
  fingerprint?: string;
  type?: TransactionTypeEnum;
}
