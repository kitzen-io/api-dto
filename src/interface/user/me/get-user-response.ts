import { IUserEntity } from '../models';
export interface IGetUserResponse extends IUserEntity {
  tradesCount30d: number;
}