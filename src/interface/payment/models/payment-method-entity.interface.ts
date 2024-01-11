import IPaymentOfferMethodsEntity from './payment-offer-methods-entity';

export default interface IPaymentMethodEntity {
  id: number;
  name: string;
  currency: string;
  offers: IPaymentOfferMethodsEntity[];
  requisiteScheme: Object;
  createdAt: Date;
  updatedAt: Date;
}
