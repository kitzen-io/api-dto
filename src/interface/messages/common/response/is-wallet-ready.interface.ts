import { ResponseCommonMessageData } from './index';

export interface IIsWalletReadyResponseCommonMessageData extends ResponseCommonMessageData {
  isReady: boolean;
}
