import FiatCurrency from '../../../enum/currency/fiat-currency';

export default interface IPaymentCurrency {
  id: number;
  identifier: FiatCurrency;
  rate: number;
}

