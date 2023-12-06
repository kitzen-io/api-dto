export default interface IEthFee {
  gasPrice: BigInt;
  lastBaseFeePerGas: BigInt;
  maxFeePerGas: BigInt;
  maxPriorityFeePerGas: BigInt;
}