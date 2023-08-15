import { OfferTypeEnum, TradeStatusEnum } from '../../../enum';

export default interface IGetTradesRequest {
  type: OfferTypeEnum;
  status: TradeStatusEnum;
}
