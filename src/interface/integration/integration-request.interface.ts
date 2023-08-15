import { IntegrationRequestActionEnum } from '../../enum';

export default interface IIntegrationRequest {
  messageId: string;
  action: IntegrationRequestActionEnum;
  data: any;
}
