import { TradeActionLogEnum } from '../../../enum';

export default interface ITradeActionNotificationEvent {
  tradeId: string;
  fiatAmount: number;
  fiatCurrency: string;
  action: TradeActionLogEnum;
  cryptoCurrency: string;
  amount: number;
  isMaker: boolean;
}

