import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { dasApi } from "@metaplex-foundation/digital-asset-standard-api";
import axios from "axios";

const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const UMI = createUmi(process.env.RPC_HTTPS_ENDPOINT).use(dasApi());

const getMetadata = async (mint) => {
  try {
    const asset = await UMI.rpc.getAsset(mint);

    const { json_uri } = asset.content;

    const jsonResponse = await axios.get(json_uri);
    const metadata = jsonResponse.data;

    return {
      ...metadata,
      metadataUri: json_uri,
    };
  } catch (error) {
    console.log("error from getMetadata");
    console.log(error);
    return null;
  }
};

export default getMetadata;
