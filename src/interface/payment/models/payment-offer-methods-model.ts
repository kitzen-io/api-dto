import { ITradeOfferModel } from '../../trade';
import IPaymentMethodModel from './payment-method-model.interface';

export default interface IPaymentOfferMethods {
  offer: ITradeOfferModel;
  offerId: string;
  requisites: string;
  method: IPaymentMethodModel;
  methodId: number;
  createdAt: Date;
  updatedAt: Date;
}
