import { BlockchainNetworkEnum } from '../../../enum';

export default interface IGetTransactionCountRequest {
  network: BlockchainNetworkEnum;
  blockTag?: string;
  address?: string;
}
