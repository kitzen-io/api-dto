import { BlockchainNetworkEnum } from '../../../enum';

export default interface IAsset {
  symbol: string;
  network: BlockchainNetworkEnum;
  identifier: string;
  name: string;
}
