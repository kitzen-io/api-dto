import { OfferStatusEnum } from '../../../enum';

export default interface IOfferStatusEvent {
  offerId: string;
  status: OfferStatusEnum;
}
