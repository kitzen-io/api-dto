import { BlockchainNetworkEnum } from '../../enum';

export interface IAssetBalance {
  network: BlockchainNetworkEnum;
  balance: string;
  identifier: string;
  address?: string;
}
