import { TransactionStatusEnum, TransactionTypeEnum } from '../../../enum';
import BlockchainNetworkEnum from '../../../enum/blockchain/blockchain-network.enum';

export default interface ITransaction {
  userId?: string;
  txId: string;
  amount: string;
  type: TransactionTypeEnum;
  fromAddress: string;
  toAddress: string;
  createdAt: Date;
  status: TransactionStatusEnum;
  network: BlockchainNetworkEnum;
  identifier?: string;
  fee: string;
}
