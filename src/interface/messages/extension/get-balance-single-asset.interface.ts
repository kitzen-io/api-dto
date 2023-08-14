import { BlockchainNetworkEnum } from '../../../enum';

export interface IGetBalanceSingleAssetExtensionMessageData {
  network: BlockchainNetworkEnum;
  identifier: string;
}
