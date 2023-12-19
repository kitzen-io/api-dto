export default interface IBlockscoutCoinPaginationMeta {
  blockNumber: number;
  index: number;
  itemsCount: number;
  hash: string;
  fee: string;
  value: string;
  insertedAt: Date;
}
