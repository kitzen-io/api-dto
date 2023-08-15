import IUserModel from './user-model.interface';

export default interface IUserReferralStatisticModel {
  id: number;
  totalInvited: number;
  totalReceived: number;
  user: IUserModel;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
