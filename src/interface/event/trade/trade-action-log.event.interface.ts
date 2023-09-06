import { TradeActionLogEnum } from '../../../enum';


export interface IActionLogCountdownTimer {
  countdownRelease: number;
}

export interface IActionLogHash {
  hash: string;
}

export interface IActionLogSignPsbtCountdown {
  psbtBase64: string;
  countdownRelease: number;
}

export interface IActionLogEscrowRequest {
  escrowWalletAddress: string;
  requisites?: string;
  countdownRelease: number;
}

export type ITradeActionLogDataType = IActionLogCountdownTimer | IActionLogHash | IActionLogSignPsbtCountdown | IActionLogEscrowRequest | null | string;

export default interface ITradeActionLogEvent {
  internal: boolean;
  action: TradeActionLogEnum;
  data: ITradeActionLogDataType;
  tradeId: string;
}
