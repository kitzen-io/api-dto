import { OfferStatusEnum, OfferTypeEnum } from '../../../enum';

export default interface IAdminGetAllOffersRequest {
  type: OfferTypeEnum;
  status: OfferStatusEnum;
  cryptoCurrency: string;
  fiatCurrency: string;
  ownerId?: string;
  description?: string;
  countryCode?: string;
  amount?: string;
  availableAmount?: string;
  min?: string;
  max?: string;
  currencyRateFixed?: string;
  sort?: string;
  order?: 'ASC' | 'DESC';
}
