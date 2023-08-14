import { BackgroundContentMessageTypesEnum, ExtensionNotificationActionEnum, ExtensionsPostMessageTypesEnum } from '../../enum';

export * from './extension';
export * from './common';


export interface IMessage<T> {
  messageType: BackgroundContentMessageTypesEnum | ExtensionNotificationActionEnum | ExtensionsPostMessageTypesEnum;
  data?: T;
}
