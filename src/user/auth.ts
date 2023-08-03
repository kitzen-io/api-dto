export interface AddressDto {
  address: string;
  network: 'btc' | 'trx';
  type: 'change' | 'receive';
  path: string;
  message: string;
  signature: string;
}

export interface GetAuthVerifyDto {
  message: string;
  address: string;
  path: string;
  signature: string;
}

export interface PostAddressDto {
  addresses: AddressDto[];
}

export interface GetUserAuthMessageRequestDto {
  message: string;
}
export interface AuthVerifyResponseDto {
  token: string;
}

export interface GetUserBalanceResponseDto {
  btc: number;
}

export interface CurrencyDto {
  id: number
  name: string
  rate: number
  type: string
}

