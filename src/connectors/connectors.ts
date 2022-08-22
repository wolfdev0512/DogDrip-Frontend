import { InjectedConnector } from "@web3-react/injected-connector";

import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, 3, 4, 5, 25, 42, 56, 97, 137, 1337, 31337, 43114, 137, 80001,
  ],
});

// export const WalletConnect = new WalletConnectConnector({
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//   rpc: { 80001: "https://rpc-mumbai.maticvigil.com" },
// });

export const WalletConnect = new WalletConnectConnector({
  rpc: {
    1: "https://eth-mainnet.g.alchemy.com/v2/-ajv5spWDkHtKGMnGBrX9FBQSJyeOq-X",
    4: "https://eth-rinkeby.alchemyapi.io/v2/GwOWj5s-v_OUsjrL22kme2rFCSafFvlH",
    80001:
      "https://polygon-mumbai.g.alchemy.com/v2/ogDLGqiq5fRwo03sXx0Pt4kGHrdXbRH6",
    137: "https://polygon-mumbai.g.alchemy.com/v2/In2uAgR_E4NnfJS3nJuxfs2ZS2JjEjUa",
  },
  qrcode: true,
  bridge: "https://bridge.walletconnect.org",
});
