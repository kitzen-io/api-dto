import { SocketTopicEnum } from '../../enum';
import ITradeActionNotificationEvent from './trade/trade-action-notification.event.interface';
import IOfferStatusEvent from './offer/offer-status.event.interface';
import { ISystemCurrencyRateEvent, ISystemFeeEvent, ITradeActionLogEvent } from './index';
import IUserNotificationEntity from '../user/notification/user-notification-entity.interface';
import ISystemCommandEvent from './system/system-command-event.interface';
import IConversationMessageEntity from '../trade/conversation/conversation-message-entity.interface';
import IIntegrationEvent from './integration/integration-event.interface';
import IIntegrationEscrowSendFundsData from './integration/integration-escrow-send-funds-data.interface';
import IIntegrationSignTransactionData from './integration/integration-sign-transaction-data.interface';

export type PublishMessageDataType = ISystemCommandEvent | ITradeActionNotificationEvent | IOfferStatusEvent | IConversationMessageEntity | ITradeActionLogEvent | IUserNotificationEntity<any> | ISystemCurrencyRateEvent | ISystemFeeEvent | IIntegrationEvent<IIntegrationEscrowSendFundsData> | IIntegrationEvent<IIntegrationSignTransactionData>;

export default interface IPublishMessageEvent {
  channel: string;
  topic: SocketTopicEnum;
  data: PublishMessageDataType;
}
