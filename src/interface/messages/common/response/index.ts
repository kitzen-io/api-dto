import { IAllowedPermissionsResponseCommonMessageData, IRequestPermissionsResponseCommonMessageData, ICheckPermissionsResponseCommonMessageData } from './permissions.response.interface';
import { IIsWalletReadyResponseCommonMessageData } from './is-wallet-ready.interface';
import { IGetAddressResponseCommonMessageData } from './get-address.response.interface';

interface ResponseCommonMessageData {
  success: boolean;
}

export {
  ResponseCommonMessageData,
  IAllowedPermissionsResponseCommonMessageData,
  IRequestPermissionsResponseCommonMessageData,
  ICheckPermissionsResponseCommonMessageData,
  IIsWalletReadyResponseCommonMessageData,
  IGetAddressResponseCommonMessageData,
};
