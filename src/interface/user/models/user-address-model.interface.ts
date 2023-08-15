import { AddressTypeEnum, BlockchainNetworkEnum } from '../../../enum';
import IUserModel from './user-model.interface';

export default interface IUserAddressModel {
  id: number;
  user: IUserModel;
  userId: string;
  isMaster: boolean;
  address: string;
  path: string;
  type: AddressTypeEnum;
  network: BlockchainNetworkEnum;
  createdAt: Date;
  updatedAt: Date;
}
