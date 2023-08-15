import IUserModel from './user-model.interface';
import { BlockchainNetworkEnum } from '../../../enum';

export interface IAssetModel {
  id: number;
  symbol: string;
  name: string;
  network: BlockchainNetworkEnum;
  identifier: string;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserAssetModel {
  id: number;
  user: IUserModel;
  userId: string;
  asset: IAssetModel;
  assetId: number;
  createdAt: Date;
  updatedAt: Date;
}
