enum TradeStateEnum {
  PENDING = 'pending',
  DEPOSITING = 'depositing',
  CANCELING = 'canceling',

  IN_PROGRESS = 'in_progress',
  PAID = 'paid',

  RELEASING = 'releasing',
  COMPLETED = 'completed',

  DISPUTED = 'disputed',
  RESOLVED = 'resolved',
  CANCELED = 'canceled',
}

export default TradeStateEnum;
