export default interface IUserAuthVerifyMessageRequest {
  message: string;
  address: string;
  signature: string;
  timezone: string;
  device: string;
}
