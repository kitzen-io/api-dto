import { BlockchainNetworkEnum } from '../../../enum';

export default interface IGetAvailableBalance {
  offerId?: string;
  identifier: string;
  network: BlockchainNetworkEnum;
}
