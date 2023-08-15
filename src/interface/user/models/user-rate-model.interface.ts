import { ITradeModel } from '../../trade';
import IUserModel from './user-model.interface';

export interface IUserRateModel {
  id: number;
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  createdAt: Date;
  updatedAt: Date;
  user: IUserModel;
}

export interface IRateModel {
  id: number;
  message: string;
  rate: number;
  actedUser: IUserModel;
  userId: string;
  user: IUserModel;
  createdAt: Date;
  updatedAt: Date;
  trade: ITradeModel;
  tradeId: string;
}
