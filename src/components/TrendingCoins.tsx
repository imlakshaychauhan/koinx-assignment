import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/trendingcoins.css";

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/search/trending",
    headers: { "x-cg-demo-api-key": "CG-XsE973bwfpbhVofVYWFwMpqi	" },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data.coins.slice(0, 3));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="trending-div">
      <h1>Trending Coins (24h)</h1>
      {coins && coins.length > 0 ? (
        <div>
          {coins.map((coin) => {
            return (
              <div className="coins">
                <div className="left-coins">
                  <img src={coin.item?.thumb} />
                  <p className="coin-name">{coin.item.name} ({coin.item.symbol})</p>
                </div>
                <div className="right-coins">
                  <p className="hike-percent">
                    {coin.item.data.price_change_percentage_24h?.usd.toFixed(2)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default TrendingCoins;
