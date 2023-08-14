import { ExtensionsPermissionEnum } from '../../../../enum';

export interface ICheckPermissionsResponseCommonMessageData {
  permissionsGranted?: boolean;
}
export interface IRequestPermissionsResponseCommonMessageData {
  data: {
    publicKey: string;
    derivationPath: string;
  };
}
export interface IAllowedPermissionsResponseCommonMessageData {
  permissions: ExtensionsPermissionEnum[];
}
