import IUserEntity from './user-entity.interface';

export default interface IUserIpEntity {
  id: number;
  ip: string;
  country: string;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUserEntity;
  userId: string;
}
