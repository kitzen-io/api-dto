import { BlockchainNetworkEnum } from '../../../enum';

export interface ICreateTransactionExtensionMessageData {
  amount: string | number;
  password: string;
  address: string;
  pricePerByte: string;
  tradeId: string;
  origin: string;
  spendOwnFee: boolean;
  network: BlockchainNetworkEnum;
  identifier: string;
}
