// eslint-disable-next-line @typescript-eslint/naming-convention
const SocketChannel = {
  SERVER: {
    CHANNEL: '_server',
    TOPIC: '_server',
  },
  SYSTEM: {
    CHANNEL: 'SYSTEM',
    TOPIC: 'SYSTEM',
  },
  OFFER: {
    CHANNEL: 'OFFER',
    TOPIC: 'OFFER',
  },
  NOTIFICATION: {
    CHANNEL: 'NOTIFICATION',
    TOPIC: (userId: string): string => `NOTIFICATION:${userId}`,
  },
  TRADE: {
    CHANNEL: 'TRADE',
    TOPIC: (tradeId: string): string => `TRADE:${tradeId}`,
  },
  TRADE_CONVERSATION: {
    CHANNEL: 'TRADE_CONVERSATION',
    TOPIC: (tradeId: string): string => `TRADE_CONVERSATION:${tradeId}`,
  },
  INTEGRATION: {
    CHANNEL: 'INTEGRATION',
    TOPIC: (tradeId: string): string => `INTEGRATION:${tradeId}`,
  },
};

export default SocketChannel;
