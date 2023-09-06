import { IntegrationRequestActionEnum } from '../../../enum';

export default interface IIntegrationEvent<T> {
  messageId: string;
  action: IntegrationRequestActionEnum;
  data: T;
}

