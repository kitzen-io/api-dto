import {
  AddressNetworkDto,
  AddressTypeDto
} from "./btc";

export interface GetUserAuthMessageResponse {
  message: string;
}

export interface PostUserAuthVerifyResponse {
  token: string;
}

export interface PostUserAuthVerifyRequest {
  message: string;
  address: string;
  path: string;
  signature: string;
}

export interface GetUserBalanceResponse {
  btc: number;
}

export interface PostUserAddressRequest  {
  addresses: IAddressDto[];
}

export interface IAddressDto {
  address: string;
  network: AddressNetworkDto;
  type: AddressTypeDto;
  path: string;
  message: string;
  signature: string;
}

