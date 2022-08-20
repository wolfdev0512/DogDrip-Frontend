import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, 3, 4, 5, 25, 42, 56, 97, 137, 1337, 31337, 43114, 137, 80001,
  ],
});
