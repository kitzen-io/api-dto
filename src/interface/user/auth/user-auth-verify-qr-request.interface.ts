export default interface IUserAuthVerifyQrRequest {
  message: string;
  address: string;
  signature: string;
  device: string;
}
