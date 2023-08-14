import { BlockchainNetworkEnum } from '../../../enum';

export interface ICreateTransactionExtensionMessageData {
  amount: null;
  password: string;
  address: string;
  pricePerByte: number;
  tradeId: string;
  origin: string;
  spendOwnFee: number;
  network: BlockchainNetworkEnum;
  identifier: string;
}
