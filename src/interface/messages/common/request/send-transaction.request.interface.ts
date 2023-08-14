import { BlockchainNetworkEnum } from '../../../../enum';

export interface ISendTransactionRequestCommonMessageData {
  to: string;
  amount: string;
  network: BlockchainNetworkEnum;
  currency?: string;
  identifier: string;
  tradeId: string;
}
