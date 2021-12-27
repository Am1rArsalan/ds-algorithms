import { WalletType } from "./models/wallet";

export function seedData() {
  return [
    {
      key: "la6i1rqjdsm3or0ltfuk",
      name: "new-wallet",
      balance: 0,
      coins: [],
      lastUpdate: "2021-12-27T17:55:16.978Z",
    },
  ] as WalletType[];
}
