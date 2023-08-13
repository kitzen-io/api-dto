import { BlockchainNetworkEnum } from "../../enum";

const CRYPTO_CURRENCY = [
  {
    label: 'BTC',
    value: `BTC_${BlockchainNetworkEnum.BTC}`,
    network: BlockchainNetworkEnum.BTC,
    identifier: 'coin',
  },
];

export default CRYPTO_CURRENCY;

