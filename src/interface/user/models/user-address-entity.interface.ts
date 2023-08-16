import { AddressTypeEnum, BlockchainNetworkEnum } from '../../../enum';
import IUserEntity from './user-entity.interface';

export default interface IUserAddressEntity {
  id: number;
  user: IUserEntity;
  userId: string;
  isMaster: boolean;
  address: string;
  path: string;
  type: AddressTypeEnum;
  network: BlockchainNetworkEnum;
  createdAt: Date;
  updatedAt: Date;
}
