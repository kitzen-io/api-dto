import { BlockchainNetworkEnum } from '../../../enum';

export default interface IGetUserBalanceRequest {
  network: BlockchainNetworkEnum;
  identifier: string;
}
