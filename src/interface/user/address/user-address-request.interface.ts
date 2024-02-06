import BlockchainNetworkEnum from '../../../enum/blockchain/blockchain-network.enum';
import AddressTypeEnum from '../../../enum/address/address-type.enum';

export interface IUserAddressRequest {
  addresses: IAddressDto[];
  pubkey: string;
  changePubkey: string;
}

export interface IAddressDto {
  address: string;
  network: BlockchainNetworkEnum;
  type: AddressTypeEnum;
  path: string;
  message: string;
  signature: string;
}

