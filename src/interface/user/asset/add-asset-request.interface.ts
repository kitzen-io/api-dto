import { BlockchainNetworkEnum } from '../../../enum';

export default interface IAddAssetRequest {
  identifier: string;
  network: BlockchainNetworkEnum;
}
