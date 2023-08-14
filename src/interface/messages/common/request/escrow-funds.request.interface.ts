import { BlockchainNetworkEnum } from '../../../../enum';

export interface IEscrowFundsRequestCommonMessageData {
  to: string;
  amount: string;
  currency: string;
  bitcoinFeePerByte: number;
  tradeId: string;
  network?: BlockchainNetworkEnum;
  identifier?: string;
}
