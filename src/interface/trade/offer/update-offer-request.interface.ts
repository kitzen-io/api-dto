import { BlockchainNetworkEnum, OfferStatusEnum, OfferTypeEnum } from '../../../enum';
import { IPaymentMethodDto } from '../models';

export default interface IUpdateOfferRequest {
  id: string;
  type?: OfferTypeEnum;
  cryptoCurrencyNetwork?: BlockchainNetworkEnum;
  cryptoCurrencyIdentifier?: string;
  fiatCurrency?: string;
  min?: number;
  max?: number;
  description?: string;
  currencyRateFixed?: number;
  availableAmount?: bigint;
  amount?: bigint;
  countryCode?: string;
  paymentMethods?: IPaymentMethodDto[];
  status?: OfferStatusEnum;
  version?: number;
}
