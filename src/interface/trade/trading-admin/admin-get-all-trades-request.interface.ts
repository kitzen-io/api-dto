import { OfferTypeEnum, TradeActionLogEnum, TradeStateEnum, TradeStatusEnum } from '../../../enum';

export default interface IAdminGetAllTradesRequest {
  id: string;
  type: OfferTypeEnum;
  status: TradeStatusEnum;
  state: TradeStateEnum;
  action: TradeActionLogEnum;
  fiatCurrency: string;
  cryptoCurrency: string;
  currencyRate: string;
  fiatAmount: string;
  cryptoAmountBuyer: string;
  cryptoAmountSeller: string;
  fee: string;
  takerId: string;
  makerId: string;
  sort: string;
  order: string;
}
