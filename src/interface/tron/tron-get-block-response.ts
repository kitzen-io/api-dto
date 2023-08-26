export interface ITronGetBlockResponse {
  blockID: string;
  block_header: TronBlockHead;
}

export interface TronBlockHead {
  raw_data: TronBlockHeadRawData;
  witness_signature: string;
}

export interface TronBlockHeadRawData {
  number: number;
  txTrieRoot: string;
  witness_address: string;
  parentHash: string;
  version: number;
  timestamp: number;
}
