import { OfferStatusEnum } from '../../../enum';

export default interface IChangeOfferStatusRequest {
  id: string;
  status: OfferStatusEnum;
}
