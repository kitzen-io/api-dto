type IGetEscrowTransactionForSignResponse = {
  psbtBase64: string;
  derivationPath: string;
} | {
  tradeId: string;
  makerAddress: string;
  takerAddress: string;
  amount: bigint;
  fee: number; // half platform fee
};

export default IGetEscrowTransactionForSignResponse;
