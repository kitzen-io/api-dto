import { AddressTypeEnum, BlockchainNetworkEnum } from '../../../enum';

export interface IGetNetworkAddress {
  network: BlockchainNetworkEnum;
  type: AddressTypeEnum | 'TRC';
}
