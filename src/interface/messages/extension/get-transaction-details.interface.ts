import { BlockchainNetworkEnum } from '../../../enum';

export interface IGetTransactionDetailsExtensionMessageData {
  network: BlockchainNetworkEnum;
  identifier: string;
  txId: string;
}
