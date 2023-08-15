import IPaymentOfferMethods from './payment-offer-methods-model';

export default interface IPaymentMethodModel {
  id: number;
  name: string;
  currency: string;
  offers: IPaymentOfferMethods[];
  createdAt: Date;
  updatedAt: Date;
}
