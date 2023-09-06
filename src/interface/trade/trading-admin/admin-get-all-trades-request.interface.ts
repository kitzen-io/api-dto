import { OfferTypeEnum, TradeActionLogEnum } from '../../../enum';

export default interface IAdminGetAllTradesRequest {
  id: string;
  type: OfferTypeEnum;
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
