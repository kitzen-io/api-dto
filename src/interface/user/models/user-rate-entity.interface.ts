import { ITradeEntity } from '../../trade';
import IUserEntity from './user-entity.interface';

export interface IUserRateEntity {
  id: number;
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  createdAt: Date;
  updatedAt: Date;
  user: IUserEntity;
}

export interface IRateEntity {
  id: number;
  message: string;
  rate: number;
  actedUser: IUserEntity;
  userId: string;
  user: IUserEntity;
  createdAt: Date;
  updatedAt: Date;
  trade: ITradeEntity;
  tradeId: string;
}
