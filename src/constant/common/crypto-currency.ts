import { BlockchainNetworkEnum } from '../../enum';

const CRYPTO_CURRENCY = [
  {
    label: 'BTC',
    value: `${BlockchainNetworkEnum.BTC}_coin`,
    network: BlockchainNetworkEnum.BTC,
    identifier: 'coin',
  },
  {
    label: 'ETH',
    value: `${BlockchainNetworkEnum.ETH}_coin`,
    network: BlockchainNetworkEnum.ETH,
    identifier: 'coin',
  },
  {
    label: 'USDC',
    value: `${BlockchainNetworkEnum.ETH}_0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48`,
    network: BlockchainNetworkEnum.ETH,
    identifier: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  },
];

export default CRYPTO_CURRENCY;

