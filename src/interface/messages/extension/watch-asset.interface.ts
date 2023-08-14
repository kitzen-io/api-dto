import { BlockchainNetworkEnum } from '../../../enum';

export interface IWatchAssetExtensionMessageData {
  network: BlockchainNetworkEnum;
  identifier: string;
}
