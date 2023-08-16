import { BlockchainNetworkEnum, OfferStatusEnum, OfferTypeEnum } from '../../../enum';
import { IPaymentOfferMethodsEntity } from '../../payment';
import { IUserEntity } from '../../user';

export default interface ITradeOfferEntity {
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
  method: IPaymentOfferMethodsEntity[];
  user: IUserEntity;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}
