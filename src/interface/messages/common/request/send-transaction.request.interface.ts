import { BlockchainNetworkEnum } from '../../../../enum';

export interface ISendTransactionRequestCommonMessageData {
  to: string;
  amount: string;
  network: BlockchainNetworkEnum;
  identifier: string;
  tradeId: string;
}
