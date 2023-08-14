import { BlockchainNetworkEnum } from '../../../enum';

export interface IEstimateFeeBTCExtensionMessageData {
  address: string;
  amount: string;
  pricePerByte: number;
}
export interface IEstimateFeeTRCExtensionMessageData {
  address: string;
  amount: string;
  network: BlockchainNetworkEnum;
  identifier: string;
}
