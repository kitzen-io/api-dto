import { OfferTypeEnum, TradeActionLogEnum, TradeStateEnum, TradeStatusEnum } from '../../../enum';

export default interface IAdminUpdateTradeRequest {
  id: string;
  type?: OfferTypeEnum;
  fiatCurrency?: string;
  cryptoCurrency?: string;
  currencyRate?: number;
  fiatAmount?: number;
  cryptoAmountBuyer?: bigint;
  cryptoAmountSeller?: bigint;
  fee?: bigint;
  status?: TradeStatusEnum;
  state?: TradeStateEnum;
  action?: TradeActionLogEnum;
  depositTransactionId?: string;
  escrowWalletAddress?: string;
  releaseTransactionId?: string;
  isRatedTaker?: boolean;
  isRatedMaker?: boolean;
  makerId?: string;
  takerId?: string;
  createdAt?: Date;
}
