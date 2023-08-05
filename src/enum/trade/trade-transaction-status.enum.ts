enum TradeTransactionStatusEnum {
  CREATED = 'created', // when seller sent money to escrow
  RECEIVED = 'received', // when block confirmed and money on escrow account
  SENT = 'sent', // when escrow account sent money to buyer
  RELEASED = 'released', // when escrow transaction was released to buyer
  FAILED = 'failed',
}

export default TradeTransactionStatusEnum;
