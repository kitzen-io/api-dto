export default interface IIntegrationEscrowSendFundsData {
  tradeId: string;
  escrowWalletAddress: string;
  cryptoAmountSeller: string;
  bitcoinFeePerByte: string;
  cryptoCurrencyNetwork: string;
  cryptoCurrencyIdentifier: string;
}

