export default interface ISystemFeeEvent {
  escrowTransactionMinSatoshiAmount: number;
  escrowTransactionFeeRate: number;
  bitcoinFeePerByte: number;
  releaseEscrowSatoshiFeeVBytes: number;
}

