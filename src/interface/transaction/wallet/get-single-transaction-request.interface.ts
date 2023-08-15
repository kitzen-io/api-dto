import { BlockchainNetworkEnum } from '../../../enum';

export default interface IGetSingleTransactionRequest {
  identifier: string;
  network: BlockchainNetworkEnum;
}
