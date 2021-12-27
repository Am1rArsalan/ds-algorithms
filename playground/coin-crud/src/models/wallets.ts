import { Wallet, WalletType } from "./wallet";

export type WalletsType = {
  size: number;
  wallets: Wallet[];
};

export class Wallets {
  public size: number;
  public wallets: WalletType[];

  constructor() {
    this.size = 0;
    this.wallets = [];
  }

  add(wallet: WalletType) {
    this.wallets.push(wallet);
    this.size++;
  }

  getAll() {
    return this;
  }

  isWalletExist(name: string) {
    return this.wallets.find((wallet) => wallet.name === name);
  }

  changeWalletName(name: string, newName: string) {
    const foundedIndex = this.wallets.findIndex(
      (wallet) => wallet.name === name
    );

    if (foundedIndex > -1) {
      this.wallets[foundedIndex].name = newName;
      return this.wallets[foundedIndex];
    }
  }

  remove(name: string) {
    const deletedWallet = this.wallets.find((wallet) => wallet.name === name);
    this.wallets = this.wallets.filter((wallet) => wallet.name !== name);
    return deletedWallet;
  }

  setResponseCodeAndMessage(code: number, message: string) {
    return { ...this, code, message };
  }

  initialize(wallets: WalletType[]) {
    this.wallets = wallets;
    this.size = wallets.length;

    return this;
  }
}
