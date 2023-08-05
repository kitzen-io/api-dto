import { PubNubChannelDestinationEnum, PubNubChannelPrefixEnum, PubNubChannelTypeEnum } from '../../../../enum';

export default interface IGrandAccess {
  channelPrefix: PubNubChannelPrefixEnum;
  channelType: PubNubChannelTypeEnum;
  destination: string | PubNubChannelDestinationEnum;
  read: boolean;
  write: boolean;
  remove?: boolean;
}

