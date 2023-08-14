import { BlockchainNetworkEnum } from '../../enum';

export interface IAsset {
  symbol: string;
  network: BlockchainNetworkEnum;
  identifier: string;
  name: string;
}
