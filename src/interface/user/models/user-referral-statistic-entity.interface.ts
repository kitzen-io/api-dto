import IUserEntity from './user-entity.interface';

export default interface IUserReferralStatisticEntity {
  id: number;
  totalInvited: number;
  totalReceived: number;
  user: IUserEntity;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
