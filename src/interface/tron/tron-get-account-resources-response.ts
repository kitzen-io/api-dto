export interface ITronGetAccountResourcesResponse {
  freeNetLimit: number;
  assetNetUsed: TronAssetNetUsed[];
  assetNetLimit: TronAssetNetLimit[];
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
