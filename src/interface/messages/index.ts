import { BackgroundContentMessageTypesEnum, BackgroundMessageTypeEnum, ExtensionsPostMessageTypesEnum } from '../../enum';

import {
  IGetNetworkAddress,
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
  messageType: BackgroundMessageTypeEnum | BackgroundContentMessageTypesEnum | ExtensionsPostMessageTypesEnum;
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
  IGetNetworkAddress,
};
