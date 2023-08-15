import { BlockchainNetworkEnum, OfferTypeEnum } from '../../../enum';
import { IPaymentMethodDto } from '../models';

export default interface ICreateOfferRequest {
  type: OfferTypeEnum;
  cryptoCurrencyNetwork: BlockchainNetworkEnum;
  cryptoCurrencyIdentifier: string;
  fiatCurrency: string;
  min: number;
  max: number;
  description: string;
  countryCode: string;
  publicKey: string;
  derivationPath: string;
  currencyRateFixed: number;
  amount: bigint;
  paymentMethods: IPaymentMethodDto[];
}
