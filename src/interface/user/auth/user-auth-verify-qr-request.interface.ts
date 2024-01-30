export default interface IUserAuthVerifyQrRequest {
  qr: string;
  message: string;
  address: string;
  signature: string;
  device: string;
}
