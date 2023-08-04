import { PubNubChatMessageTypeEnum } from '../../../enum';

export interface IPubNubChatMessageSender {
  name: string;
  id: string;
}

export interface IPubnubChatMessage {
  type: PubNubChatMessageTypeEnum;
  message: string;
  sender: IPubNubChatMessageSender;
}
