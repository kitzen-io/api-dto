import { BlockchainNetworkEnum } from '../../../enum';

export default interface CreateUserReferralRequestsRequest {
  amount: number;
  network: BlockchainNetworkEnum;
  address: string;
}
