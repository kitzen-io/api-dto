import { BlockchainNetworkEnum } from '../../enum';

export default interface IAssetBalance {
  network: BlockchainNetworkEnum;
  balance: string;
  identifier: string;
  address?: string;
  rate: number;
}
