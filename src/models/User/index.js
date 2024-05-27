import mongoose from "mongoose";
// {
//     "address": "HGrg5cHd2vEVrJz77apn1RHBuBnPXHRMnmpVue9hjMFm",
//     "likes_received": 16,
//     "unread_notifs_count": 25,
//     "mentions_received": 0,
//     "followers": 2,
//     "following": 0,
//     "username": null,
//     "profile_image": null,
//     "last_username_update_timestamp": 0,
//     "bio": null
//   }

const userSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      unique: true,
      index: true,
      required:true
    },
    likes_received: {
      type: Number,
    },
    unread_notifs_count: {
      type: Number,
    },
    mentions_received: {
      type: Number,
    },
    followers: {
      type: Number,
    },
    following: {
      type: Number,
    },
    username: {
      type: String,
    },
    profile_image: {
      type: String,
    },
    bio: {
      type: String,
    },
    created_coins: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coin",
      },
    ],
    number_of_coins_created: {
      type: Number,
    },
    number_of_completed_coins_created: {
      type: Number,
    },
    number_of_reached_koh_coins_created: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
