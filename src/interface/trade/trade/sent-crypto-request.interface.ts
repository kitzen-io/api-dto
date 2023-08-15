import { TradeActionLogEnum } from '../../../enum';

export default interface ISentCryptoRequest {
  action: TradeActionLogEnum;
  error?: string;
}
