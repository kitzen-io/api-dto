import IUserEntity from './user-entity.interface';

export default interface IUserNotificationsPreferencesEntity {
  id: number;
  instantTradeCreate: boolean;
  instantTradeStatus: boolean;
  instantOfferStatus: boolean;
  emailTradeCreate: boolean;
  emailTradeStatus: boolean;
  emailOfferStatus: boolean;
  enableSound: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: IUserEntity;
}
