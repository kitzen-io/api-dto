import { ReferralWithdrawalRequestStatusEnum } from '../../../enum';

export default interface IGetUserReferralRequest {
  status: ReferralWithdrawalRequestStatusEnum;
}
