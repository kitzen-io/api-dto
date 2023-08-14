import { BlockchainNetworkEnum, TransactionRequestStatus } from '../../../enum';

export interface ISignTransactionExtensionMessageData {
  status: TransactionRequestStatus;
  derivationPath: string;
  psbtBase64: string;
  tradeId: string;
  origin: string;
  network: BlockchainNetworkEnum;
  identifier: string;
}
