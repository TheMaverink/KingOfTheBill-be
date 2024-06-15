import mongoose from "mongoose";

// {
//     "signature": "4SoK9epgpCaz4QvHKTP4AWdLhChgR2t9p7s5pdxHqNJwDqvWNcjuGwkC1aHZ2gzPej7nKDN5RA3287iLrvi1kTUf",
//     "sol_amount": 1000000001,
//     "token_amount": 14506555632869,
//     "is_buy": true,
//     "user": "BtvZaPCN63K691nyXdVS3de2qM1tqMky4VLrH9uoxnUp",
//     "timestamp": 1714752586,
//     "mint": "D1USiU5akUnxc7s4ze8uB3bCM2Mktv9Qiiq7ha1nGCi7",
//     "virtual_sol_reserves": 47608882059,
//     "virtual_token_reserves": 676134340560177,
//     "tx_index": 1,
//     "name": "Singopoo",
//     "symbol": "SGP",
//     "description": "We put the $SGP on the blockchain Singapore is ranked the #1 most competitive country in the world.Don't fade us we will definitely play a role!  Ticker is  $SGP",
//     "image_uri": "https://pump.mypinata.cloud/ipfs/QmUhrfe9gzbuGwWRdNFPPUoCCC77zxtMrNoYFaEShAfR1a",
//     "metadata_uri": "https://cf-ipfs.com/ipfs/QmcT9Jgkt8vU4A3zG9xRkVWKP4Z2TEzLAq3uoi2snSgv2C",
//     "twitter": "https://twitter.com/Singopoo_onsol",
//     "telegram": "https://t.me/SingopooCoin2024",
//     "bonding_curve": "91Wyon9xqudCS8fP3aWsCr7qYmPMyXc1ZU8ud8XA1HSE",
//     "associated_bonding_curve": "GNcg8Az9woyRoWrL8SLGeijr3WnMq6v3LJW1BGJNLC6p",
//     "creator": "6wX8ByGX24Ry3JQvDF2q3zFQS4UtsmtMqzT3vVqydAjb",
//     "created_timestamp": 1714750852038,
//     "raydium_pool": null,
//     "complete": false,
//     "total_supply": 1000000000000000,
//     "website": "https://singopoo.top/",
//     "show_name": true,
//     "king_of_the_hill_timestamp": null,
//     "market_cap": 67.486420678,
//     "reply_count": 17,
//     "last_reply": 1714752577534,
//     "nsfw": false,
//     "market_id": null,
//     "inverted": null,
//     "creator_username": null,
//     "creator_profile_image": null,
//     "usd_market_cap": 9572.9487731743,
//     "holding": []
//     },

const coinSchema = new mongoose.Schema(
  {
    mint: {
      type: String,
      unique: true,
      required: true,
    },
    mint_signature: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    bounding_curve: {
      type: String,
    },
    associated_bounding_curve: {
      type: String,
    },
    virtual_sol_reserves: {
      type: Number,
    },
    virtual_token_reserves: {
      type: Number,
    },
    total_supply: {
      type: Number,
    },
    market_cap_sol: {
      type: Number,
      index: true,
    },
    usd_market_cap: {
      type: Number,
    },
    name: {
      type: String,
    },
    symbol: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    metadata_uri: {
      type: String,
    },
    twitter: {
      type: String,
    },
    telegram: {
      type: String,
    },
    website: {
      type: String,
    },
    coin_creation_slot: {
      type: Number,
    },
    coin_creation_blocktime: {
      type: Date,
      index: true,
    },
    raydium_timestamp: {
      type: Date,
    },
    raydium_pool: {
      type: String,
      index: true,
    },
    king_of_the_hill_timestamp: {
      type: Date,
      index: true,
    },

    //---
    tx_index: {
      type: Number,
    },

    created_timestamp: {
      type: Date,
    },
    raydium_pool: {
      type: String, //?
    },
    reply_count: {
      type: Number,
    },
    last_reply: {
      type: Date,
    },
    nsfw: {
      type: Boolean,
    },

    // creator_username: {
    //   type: String,
    // },
    // creator_profile_image: {
    //   type: String,
    // },

    //add holders?
  },
  { timestamps: true }
);

const Coin = mongoose.model("Coin", coinSchema);

export default Coin;
