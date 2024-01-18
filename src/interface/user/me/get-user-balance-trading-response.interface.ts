import { BlockchainNetworkEnum } from "../../../enum";

export default interface IGetUserBalanceTradingResponse {
  identifier: string;
  network: BlockchainNetworkEnum;
  balance: string;
  rate: string;
  availableBalance: bigint;
}
