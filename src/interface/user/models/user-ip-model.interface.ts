import IUserModel from './user-model.interface';

export default interface IUserIpModel {
  id: number;
  ip: string;
  country: string;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUserModel;
  userId: string;
}
