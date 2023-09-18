// https://developers.tron.network/reference/getaccountresource
export interface ITronGetAccountResourcesResponse {
  freeNetLimit: number;
  assetNetUsed: TronAssetNetUsed[];
  assetNetLimit: TronAssetNetLimit[];
  EnergyLimit: number;
  EnergyUsed: number;
  NetLimit: number;
  freeNetUsed: number;
  NetUsed: number;
  TotalNetLimit: number;
  TotalNetWeight: number;
  TotalEnergyLimit: number;
  TotalEnergyWeight: number;
}

export interface TronAssetNetUsed {
  key: string;
  value: number;
}

export interface TronAssetNetLimit {
  key: string;
  value: number;
}
