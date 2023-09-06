import { ITradeOfferEntity } from '../../trade';
import { IRateEntity, IUserRateEntity } from './user-rate-entity.interface';
import IUserAddressEntity from './user-address-entity.interface';
import IUserNotificationsPreferencesEntity from './user-notifications-preferences-entity.interface';
import IUserReferralStatisticEntity from './user-referral-statistic-entity.interface';

export default interface IUserEntity {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  referralShareConfiguration: number;
  tradesCount: string;
  totalResponseSeconds: string;
  volume: number;
  lastOnline: Date;
  nameUpdateDate: Date;
  userNotificationPreferences: IUserNotificationsPreferencesEntity;
  userRate: IUserRateEntity;
  referralStatisticModel: IUserReferralStatisticEntity;
  addresses: IUserAddressEntity[];
  rate: IRateEntity[];
  offers: ITradeOfferEntity[];
  createdAt: Date;
  updatedAt: Date;
}
