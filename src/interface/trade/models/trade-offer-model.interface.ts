import { BlockchainNetworkEnum, OfferStatusEnum, OfferTypeEnum } from '../../../enum';
import { IPaymentOfferMethods } from '../../payment';
import { IUserModel } from '../../user';

export default interface ITradeOfferModel {
  id: string;
  description: string;
  countryCode: string;
  fiatCurrency: string;
  cryptoCurrencyNetwork: BlockchainNetworkEnum;
  cryptoCurrencyIdentifier: string;
  currencyRateFixed: number;
  amount: bigint;
  availableAmount: bigint;
  type: OfferTypeEnum;
  status: OfferStatusEnum;
  min: number;
  max: number;
  version: number;
  publicKey: string;
  derivationPath: string;
  method: IPaymentOfferMethods[];
  user: IUserModel;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}
