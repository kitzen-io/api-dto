export default interface ICreateTradeRequest {
  offerId: string;
  cryptoAmount: bigint;
  paymentMethodId: number;
  blockchainFee: number;
  version: number;
  publicKey: string;
  derivationPath: string;
}
