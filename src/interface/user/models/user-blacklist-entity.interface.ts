import IUserEntity from "./user-entity.interface";

export default interface IBlacklistEntity {
  id: number;
  userId: string;
  user: IUserEntity;
  blacklistedUserId: string;
  blacklistedUser: IUserEntity;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
}
