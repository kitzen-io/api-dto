export default interface IPaymentConfigurationEntity {
  id: number;
  escrowTransactionFeeRate: number;
  escrowTransactionMinSatoshiAmount: number;
  escrowTransactionMinFiatAmountInUSD: number;
  tradeTimeoutStartTradeRequestMinutes: number;
  tradeTimeoutEscrowFundRequestMinutes: number;
  tradeTimeoutFiatTransferRequestMinutes: number;
  tradeTimeoutFiatTransferApproveMinutes: number;
  releaseEscrowSatoshiFeeVBytes: number;
  bitcoinFeePerByte: number;
  referralSharePercent: number;
  minWithdrawalAmountInCents: number;
  maxWithdrawalAmountInCents: number;
  createdAt: Date;
  updatedAt: Date;
}
