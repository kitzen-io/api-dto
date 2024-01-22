export default interface IUserAuthVerifyMessageRequest {
  message: string;
  address: string;
  path: string;
  signature: string;
  timezone: string;
  currency: string;
  language: string;
}
