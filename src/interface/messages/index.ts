import { BackgroundContentMessageTypesEnum, BackgroundMessageTypeEnum, ExtensionNotificationActionEnum, ExtensionsPostMessageTypesEnum } from '../../enum';

import {
  ICreateTransactionExtensionMessageData,
  IChangePasswordExtensionMessageData,
  IDecodePsbtExtensionMessageData,
  IEstimateFeeBTCExtensionMessageData,
  IEstimateFeeTRXExtensionMessageData,
  IGetBalanceSingleAssetExtensionMessageData,
  IGetTransactionDetailsExtensionMessageData,
  ISignTransactionExtensionMessageData,
  IStartWalletExtensionMessageData,
  IUnlockWalletExtensionMessageData,
  IWatchAssetExtensionMessageData,
  IApprovePermissionsExtensionMessageData,
  ISendTransactionRequestExtensionMessageData,
} from './extension';

import {
  IGetAddressResponseCommonMessageData,
  IAllowedPermissionsResponseCommonMessageData,
  ResponseCommonMessageData,
  IRequestPermissionsResponseCommonMessageData,
  ICheckPermissionsResponseCommonMessageData,
  IIsWalletReadyResponseCommonMessageData,
  IEscrowFundsRequestCommonMessageData,
  IPermissionsRequestCommonMessageData,
  ISendTransactionRequestCommonMessageData,
  ISignTransactionRequestCommonMessageData,
} from './common';

interface IExtensionMessage<T> {
  messageType: BackgroundMessageTypeEnum | BackgroundContentMessageTypesEnum | ExtensionNotificationActionEnum | ExtensionsPostMessageTypesEnum;
  data?: T;
}

export {
  IExtensionMessage,
  ICreateTransactionExtensionMessageData,
  IChangePasswordExtensionMessageData,
  IDecodePsbtExtensionMessageData,
  IEstimateFeeBTCExtensionMessageData,
  IEstimateFeeTRXExtensionMessageData,
  IGetBalanceSingleAssetExtensionMessageData,
  IGetTransactionDetailsExtensionMessageData,
  ISignTransactionExtensionMessageData,
  IStartWalletExtensionMessageData,
  IUnlockWalletExtensionMessageData,
  IWatchAssetExtensionMessageData,
  IApprovePermissionsExtensionMessageData,
  ISendTransactionRequestExtensionMessageData,
  IGetAddressResponseCommonMessageData,
  IAllowedPermissionsResponseCommonMessageData,
  ResponseCommonMessageData,
  IRequestPermissionsResponseCommonMessageData,
  ICheckPermissionsResponseCommonMessageData,
  IIsWalletReadyResponseCommonMessageData,
  IEscrowFundsRequestCommonMessageData,
  IPermissionsRequestCommonMessageData,
  ISendTransactionRequestCommonMessageData,
  ISignTransactionRequestCommonMessageData,
};
