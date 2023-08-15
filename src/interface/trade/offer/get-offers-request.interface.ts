import { BlockchainNetworkEnum, CurrencyTypeEnum, OfferTypeEnum } from '../../../enum';

export default interface IGetOffersRequest {
  type: OfferTypeEnum;
  cryptoCurrencyNetwork: BlockchainNetworkEnum;
  cryptoCurrencyIdentifier: string;
  fiatCurrency: string;
  paymentMethodId: number[];
  amountValue?: bigint;
  amountType?: CurrencyTypeEnum;
  active?: boolean;
  userId?: string;
  sort?: string;
  order?: 'ASC' | 'DESC';
}
