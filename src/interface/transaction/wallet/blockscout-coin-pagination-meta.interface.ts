export default interface BlockscoutCoinPaginationMeta {
  blockNumber: number;
  index: number;
  itemsCount: number;
  hash: string;
  fee: string;
  value: string;
  insertedAt: Date;
}
