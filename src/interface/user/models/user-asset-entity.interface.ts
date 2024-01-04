import IUserEntity from './user-entity.interface';
import { BlockchainNetworkEnum } from '../../../enum';

export interface IAssetEntity {
  id: number;
  symbol: string;
  name: string;
  network: BlockchainNetworkEnum;
  identifier: string;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserAssetEntity {
  id: number;
  user: IUserEntity;
  userId: string;
  asset: IAssetEntity;
  assetId: number;
  isSubscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
