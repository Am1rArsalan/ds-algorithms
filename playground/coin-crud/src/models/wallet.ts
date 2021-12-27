import { Coin } from "./coin";

export type WalletType = {
  key: string;
  name: string;
  balance: number;
  coins: Coin[];
  lastUpdate: string;
};

export class Wallet {
  private wallet: WalletType = {
    key: "",
    name: "",
    balance: 0.0,
    coins: [],
    lastUpdate: "",
  };

  constructor(name: string) {
    this.wallet.key = this.generateUniqueKey();
    this.wallet.name = name;
    this.wallet.balance = 0.0;
    this.wallet.coins = [];
    this.wallet.lastUpdate = new Date().toString();

    return this;
  }

  public setResponseCode(responseCode: number) {
    return { ...this, code: responseCode };
  }

  public getWallet() {
    return this.wallet;
  }

  private generateUniqueKey(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}
