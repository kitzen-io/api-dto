import { IUserEntity } from '../../user';
import { ConversationMessageTypeEnum } from '../../../enum';

export default interface IConversationMessageEntity {
  id: number;
  message: string;
  seen: boolean;
  authorId: string;
  fileUrl?: string;
  author: IUserEntity;
  quoteMessageId: number;
  tradeId: string;
  type: ConversationMessageTypeEnum;
  createdAt: Date;
}
