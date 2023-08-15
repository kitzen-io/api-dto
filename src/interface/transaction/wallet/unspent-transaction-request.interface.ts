export default interface IUnspentTransaction {
  address: string;
  amount: string;
  confirmations: number;
  script: string;
  txId: string;
  userId: string;
  vout: number;
}
