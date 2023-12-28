import { TradeActionLogEnum } from '../../enum';

export const ACTION_ESCROW_ETH_METHOD = {
  [TradeActionLogEnum.START_TRADE_REQUEST]: 'createEscrow',
  [TradeActionLogEnum.TAKER_TRANSFER_FIAT_REQUEST]: 'disableSellerCancel',
  [TradeActionLogEnum.TAKER_TRANSFER_FIAT_TRANSFERRED]: 'release',
  [TradeActionLogEnum.START_TRADE_CANCELED_MAKER]: 'sellerCancel',
  [TradeActionLogEnum.MAKER_ESCROW_CRYPTO_CANCELED_MAKER]: 'sellerCancel',
  [TradeActionLogEnum.START_TRADE_CANCELED_TAKER]: 'buyerCancel',
  [TradeActionLogEnum.MAKER_ESCROW_CRYPTO_CANCELED_TAKER]: 'buyerCancel',
  [TradeActionLogEnum.DISPUTE_MAKER_RELEASE_TO_TAKER]: 'dispute',
  [TradeActionLogEnum.DISPUTE_TAKER_RELEASE_TO_MAKER]: 'dispute',
};
