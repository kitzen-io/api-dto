import { TradeActionLogEnum } from '../../enum';

export default interface ITradeActionLog {
  action: TradeActionLogEnum;
  internal: boolean;
  data: any;
}
