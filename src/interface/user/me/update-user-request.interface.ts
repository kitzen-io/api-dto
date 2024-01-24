export default interface IUpdateUserRequest {
  name?: string;
  email?: string;
  referralCode?: string;
  referralShareConfiguration?: number;
  timezone?: string;
}
