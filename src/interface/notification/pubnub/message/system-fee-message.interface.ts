export default interface ISystemFee {
  escrowTransactionMinSatoshiAmount: number;
  escrowTransactionFeeRate: number;
  bitcoinFeePerByte: number;
  releaseEscrowSatoshiFeeVBytes: number;
}

