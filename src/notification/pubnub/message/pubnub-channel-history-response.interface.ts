interface IPubNubChannelHistoryResponse {
  channel: string;
  message?: any;
  file?: any;
  timetoken: string | number;
  messageType?: string | number;
  uuid?: string;
  publisher?: string;
  meta?: {
    [key: string]: any;
  } | undefined;
  actions: {
    [type: string]: {
      [value: string]: Array<{
        uuid: string;
        actionTimetoken: string | number; // timetoken
      }>;
    };
  };
}

export default IPubNubChannelHistoryResponse;
