import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { Wallets } from "./models/wallets";
import { Wallet } from "./models/wallet";
import { seedData } from "./seedData";

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 3000;

const ElectronicWallet = new Wallets().initialize(seedData());

app.post("/wallets", (req: Request, res: Response) => {
  const walletName = req.body.name;
  if (!walletName) {
    return res.status(400).send("wallet name is required");
  }
  const wallet = new Wallet(walletName);
  ElectronicWallet.add(wallet.getWallet());
  res.json({ ...wallet, code: 200 });
});

app.get("/wallets", (req: Request, res: Response) => {
  const wallets = ElectronicWallet.getAll().setResponseCodeAndMessage(
    200,
    "All wallets received successfully!"
  );
  res.json(wallets);
});

app.put("/wallets/:walletName", (req: Request, res: Response) => {
  console.log(req.params.walletName);
  if (!req.params.walletName) {
    return res.status(400).send("wallet name is required");
  }

  if (!ElectronicWallet.isWalletExist(req.params.walletName)) {
    return res.status(400).send("wallet is not exists");
  }

  const editedWallet = ElectronicWallet.changeWalletName(
    req.params.walletName,
    req.body.name
  );

  if (!editedWallet) {
    return res.status(400).send("wallet is not exists");
  }

  res.json({
    ...editedWallet,
    message: "wallet name changed successfully",
    code: 200,
  });
});

app.delete("/wallets/:walletName", (req: Request, res: Response) => {
  console.log(req.params.walletName);
  if (!req.params.walletName) {
    return res.status(400).send("wallet name is required");
  }

  if (!ElectronicWallet.isWalletExist(req.params.walletName)) {
    return res.status(400).send("wallet is not exists");
  }

  const deletedWallet = ElectronicWallet.remove(req.params.walletName);

  if (!deletedWallet) {
    return res.status(400).send("wallet is not exists");
  }

  res.json({
    ...deletedWallet,
    message: "Wallet deleted (logged out) successfully!",
    code: 200,
  });
});

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});


// TODO : add mongodb to for this apis
