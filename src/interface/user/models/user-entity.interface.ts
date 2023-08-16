import { ITradeOfferEntity } from '../../trade';
import { IRateEntity, IUserRateEntity } from './user-rate-entity.interface';
import IUserIpEntity from './user-ip-entity.interface';
import IUserAddressEntity from './user-address-entity.interface';
import IUserNotificationsPreferencesEntity from './user-notifications-preferences-entity.interface';
import IUserReferralStatisticEntity from './user-referral-statistic-entity.interface';

export default interface IUserEntity {
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
  userNotificationPreferences: IUserNotificationsPreferencesEntity;
  userRate: IUserRateEntity;
  referralStatisticModel: IUserReferralStatisticEntity;
  userIp: IUserIpEntity[];
  addresses: IUserAddressEntity[];
  rate: IRateEntity[];
  offers: ITradeOfferEntity[];
  createdAt: Date;
  updatedAt: Date;
}
