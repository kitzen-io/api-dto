import { BlockchainNetworkEnum } from '../../../../enum';

export interface ISendTransactionRequestCommonMessageData {
  to: string;
  amount: string;
  buyer?: string;
  network: BlockchainNetworkEnum;
  currency?: string;
  identifier: string;
  tradeId: string;
  paymentWindowInSeconds?: number;
  method?: string;
  buyerPercent?: number;
}
