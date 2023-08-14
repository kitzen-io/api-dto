import { BackgroundContentMessageTypesEnum, BackgroundMessageTypeEnum, ExtensionNotificationActionEnum, ExtensionsPostMessageTypesEnum } from '../../enum';

export * from './extension';
export * from './common';

export interface IMessage<T> {
  messageType: BackgroundMessageTypeEnum | BackgroundContentMessageTypesEnum | ExtensionNotificationActionEnum | ExtensionsPostMessageTypesEnum;
  data?: T;
}
