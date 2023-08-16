import { ITradeOfferEntity } from '../../trade';
import IPaymentMethodEntity from './payment-method-entity.interface';

export default interface IPaymentOfferMethodsEntity {
  offer: ITradeOfferEntity;
  offerId: string;
  requisites: string;
  method: IPaymentMethodEntity;
  methodId: number;
  createdAt: Date;
  updatedAt: Date;
}
