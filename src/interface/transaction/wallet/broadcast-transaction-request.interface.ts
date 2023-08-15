import { BlockchainNetworkEnum } from '../../../enum';

export default interface IBroadcastTransactionRequest {
  message: string;
  network: BlockchainNetworkEnum;
}
