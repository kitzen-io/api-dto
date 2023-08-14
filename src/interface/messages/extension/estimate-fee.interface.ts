import { BlockchainNetworkEnum } from '../../../enum';

export interface IEstimateFeeBTCExtensionMessageData {
  address: string;
  amount: string;
  pricePerByte: number;
}
export interface IEstimateFeeTRXExtensionMessageData {
  address: string;
  amount: string;
  network: BlockchainNetworkEnum;
  identifier: string;
}
