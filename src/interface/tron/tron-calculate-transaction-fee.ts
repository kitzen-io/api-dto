import { BlockchainNetworkEnum } from '../../enum';

export interface TronCalculateTransactionFeeRequest {
  ownerAddress: string;
  contractAddress?: string;
  receiverAddress: string;
  amount: string;
  network: BlockchainNetworkEnum;
}
