import { ITradeOfferModel } from '../../trade';
import { IRateModel, IUserRateModel } from './user-rate-model.interface';
import IUserIpModel from './user-ip-model.interface';
import IUserAddressModel from './user-address-model.interface';
import IUserNotificationsPreferencesModel from './user-notifications-preferences-model.interface';
import IUserReferralStatisticModel from './user-referral-statistic-model.interface';

export default interface IUserModel {
  id: string;
  name: string;
  email: string;
  referralBalance: number;
  referralCode: string;
  referralUserId: string;
  referralShareConfiguration: number;
  isEmailVerified: boolean;
  countryCode: string;
  tradesCount: string;
  totalResponseSeconds: string;
  volume: number;
  lastOnline: Date;
  nameUpdateDate: Date;
  userNotificationPreferences: IUserNotificationsPreferencesModel;
  userRate: IUserRateModel;
  referralStatisticModel: IUserReferralStatisticModel;
  userIp: IUserIpModel[];
  addresses: IUserAddressModel[];
  rate: IRateModel[];
  offers: ITradeOfferModel[];
  createdAt: Date;
  updatedAt: Date;
}
