import { Connection } from "@solana/web3.js";
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const getConnection = () =>
  new Connection(process.env.RPC_HTTPS_ENDPOINT, {
    commitment: "finalized",
    maxSupportedTransactionVersion: 0,
  });

export default getConnection;
