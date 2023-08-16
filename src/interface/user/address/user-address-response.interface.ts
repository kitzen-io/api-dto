import { IUserAddressEntity } from '../models';
export interface ISetAddressesResponseDto {
  addresses: IUserAddressEntity[];
}

export type ISetAddressesResponse = IUserAddressEntity[];
