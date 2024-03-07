import { useEffect, useState } from "react";
import SingleCurrency from "./SingleCurrency";
import "./styles/body.css";
import axios from "axios";
import GetStarted from "./GetStarted";

// Define a type for the BitcoinPrice object
type BitcoinPrice = {
  usd: number;
  usd_24h_change: number;
  inr: number;
};

const Body = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState<BitcoinPrice | null>(null); // Explicitly type the bitcoinPrice state

  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true",
    headers: { "x-cg-demo-api-key": "CG-XsE973bwfpbhVofVYWFwMpqi	" },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.bitcoin);
        setBitcoinPrice(response.data.bitcoin);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="left">
        {/* Render SingleCurrency only if bitcoinPrice is not null */}
        {bitcoinPrice && <SingleCurrency bitcoinPrice={bitcoinPrice} />}
      </div>
      <div className="right">
        <GetStarted />
      </div>
    </div>
  );
};

export default Body;
