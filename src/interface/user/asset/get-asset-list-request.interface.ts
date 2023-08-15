import { BlockchainNetworkEnum } from '../../../enum';

export default interface IGetAssetListRequest {
  symbol: string;
  identifier?: string;
  network?: BlockchainNetworkEnum;
  sort?: string;
  order?: 'ASC' | 'DESC';
}
