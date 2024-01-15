import { IUserEntity } from '../models';
export type IGetUserResponse = {
  user: IUserEntity,
  tradesCount30d: number,
};
