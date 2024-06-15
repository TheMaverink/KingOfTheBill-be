import Coin from "@models/Coin";

import { COINS_SORT_METHODS, ORDER } from "@consts/misc";

const getCoins = async (req, res, next) => {
  try {
    const { page, limit, sortingMethod, order, filters } = req.query;

    const LIMIT = Number(limit) || 10;

    const startIndex = (Number(page) - 1) * LIMIT;

    let searchCoinsCriteria = {};

    switch (sortingMethod) {
      case COINS_SORT_METHODS.CREATED_TIME:
        break;

      case COINS_SORT_METHODS.LIQUIDITY:
        break;

      case COINS_SORT_METHODS.INITIAL_LIQUIDITY:
        break;

      case COINS_SORT_METHODS.MARKET_CAP:
        break;

      case COINS_SORT_METHODS.NUMBER_TXS:
        break;

      default:
        break;
    }

    res.send({ test: "test" });
  } catch (error) {
    console.log("error from getCoinsByLastReply");
    console.log(error.message);
  }
};

export default getCoins;
