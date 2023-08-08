import CurrencyTypeEnum from '../../../enum/currency/currency-type.enum';

export default interface IPaymentCurrency {
  id: number;
  identifier: string;
  network: string;
  rate: number;
  type: CurrencyTypeEnum;
}

