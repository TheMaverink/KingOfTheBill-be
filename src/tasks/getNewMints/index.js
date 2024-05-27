import {
  PublicKey,
  LAMPORTS_PER_SOL,
  getSignaturesForAddress,
} from "@solana/web3.js";

import {
  getTokenMetadata,
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

import Coin from "@models/Coin";
import { PF_PROGRAM_ID, PF_MINTER_ADDRESS } from "@consts/pumpFun";
import getConnection from "@utils/solana/getConnection";
import getMetadata from "@utils/solana/getMetadata";
import User from "../../models/User";

const TIME_INTERVAL = 5000;

const pfMinterPk = new PublicKey(PF_MINTER_ADDRESS);

const solanaConnection = getConnection();

const getNewMints = async () => {
  setInterval(async () => {
    try {
      const minterSignatures = await solanaConnection.getSignaturesForAddress(
        pfMinterPk,
        { limit: 20 },
        "confirmed"
      );

      const getTransactionsPromisesArray = minterSignatures.map(
        async ({ signature }) => {
          try {
            const txInfo = await solanaConnection.getTransaction(signature, {
              commitment: "confirmed",
              maxSupportedTransactionVersion: 0,
            });

            const { staticAccountKeys } = txInfo.transaction.message;

            const coinMint = staticAccountKeys[1];
            const coinCreator = staticAccountKeys[0];
            const coinBondingCurve = staticAccountKeys[3];
            const coinAssociatedBondingCurve = staticAccountKeys[4];

            const savedUser = await User.findOneAndUpdate(
              { address: coinCreator },
              { address: coinCreator },
              { upsert: true, new: true }
            );

            const savedCoin = await Coin.findOne({ mint: coinMint });

            if (!savedCoin) {
              const coinMintPk = new PublicKey(coinMint);

              const metadata = await getMetadata(coinMintPk);

              const newCoin = await new Coin({
                mint: coinMint,
                creator: savedUser._id,
                bounding_curve: coinBondingCurve,
                associated_bounding_curve: coinAssociatedBondingCurve,
                name: metadata.name,
                symbol: metadata.symbol,
                description: metadata.description,
                image: metadata?.image || null,
                metadata_uri: metadata?.metadataUri || null,
                telegram: metadata?.telegram || null,
                twitter: metadata?.twitter || null,
                website: metadata?.website || null,
              });

              console.log(newCoin)

              await newCoin.save();
            }
          } catch (error) {
            console.log("getTransactionsPromisesArray error");
            console.log(error);
          }
        }
      );

      const transactions = await Promise.all(getTransactionsPromisesArray);
    } catch (error) {}
  }, TIME_INTERVAL);
};

export default getNewMints;
