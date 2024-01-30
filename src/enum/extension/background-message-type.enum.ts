enum BackgroundMessageTypeEnum {
  WAKE_UP = 'WAKE_UP',
  START_WALLET = 'START_WALLET',
  SWITCH_ACCOUNT = 'SWITCH_ACCOUNT',
  RENAME_ACCOUNT = 'RENAME_ACCOUNT',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  GET_USER_ACCOUNTS = 'GET_USER_ACCOUNTS',
  RESET_EXTENSION = 'RESET_EXTENSION',
  GET_WALLET_STATUS = 'GET_WALLET_STATUS',
  GET_NETWORK_ADDRESS = 'GET_NETWORK_ADDRESS',
  GET_MAIN_ADDRESS = 'GET_MAIN_ADDRESS',
  GET_TOKEN = 'GET_TOKEN',
  GET_UNSPENT_TRANSACTIONS = 'GET_UNSPENT_TRANSACTIONS',
  GET_WATCHED_ASSETS_WITH_BALANCE = 'GET_WATCHED_ASSETS_WITH_BALANCE',
  GET_ASSET_BALANCE = 'GET_ASSET_BALANCE',
  GET_ALL_ASSET_BALANCE = 'GET_ALL_ASSET_BALANCE',
  GET_ASSETS_LIST = 'GET_ASSETS_LIST',
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  GET_TRANSACTION_DETAILS = 'GET_TRANSACTION_DETAILS',
  GET_NOTIFICATIONS = 'GET_NOTIFICATIONS',
  GET_BTC_INFO = 'GET_BTC_INFO',
  WATCH_ASSET = 'WATCH_ASSET',
  UNSUBSCRIBE_ASSET = 'UNSUBSCRIBE_ASSET',
  UPDATE_BALANCE = 'UPDATE_BALANCE',
  ESTIMATE_FEE = 'ESTIMATE_FEE',
  ESTIMATE_FEE_TRX = 'ESTIMATE_FEE_TRX',
  ESTIMATE_FEE_ETH = 'ESTIMATE_FEE_ETH',
  PASSWORD_CHANGE = 'PASSWORD_CHANGE',
  PASSWORD_CHECK = 'PASSWORD_CHECK',
  CREATE_TRANSACTION = 'CREATE_TRANSACTION',
  SIGN_MESSAGE_WITH_ADDRESS = 'SIGN_MESSAGE_WITH_ADDRESS',
  APPROVE_PERMISSIONS = 'APPROVE_PERMISSIONS',
  DECODE_PSBT = 'DECODE_PSBT',
  UNLOCK = 'UNLOCK',
  LOCK = 'LOCK',
  LOGOUT = 'LOGOUT',
  LOGOUT_UNAUTHORIZED = 'LOGOUT_UNAUTHORIZED',
  CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION',
  SEND_TRANSACTION_REQUEST_STATUS = 'SEND_TRANSACTION_REQUEST_STATUS',
  SIGN_TRANSACTION = 'SIGN_TRANSACTION',
  GET_TRANSACTION_COUNT = 'GET_TRANSACTION_COUNT',
}

export default BackgroundMessageTypeEnum;
