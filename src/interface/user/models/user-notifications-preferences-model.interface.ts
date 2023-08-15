import IUserModel from './user-model.interface';

export default interface IUserNotificationsPreferencesModel {
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
  user: IUserModel;
}
