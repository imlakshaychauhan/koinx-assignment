import { useEffect, useState } from "react";
import "./styles/footer.css";
import axios from "axios";
import Carousel from "./Carousel";

const Footer = () => {

  const [coins, setCoins] = useState([]); // Explicitly type the coins state

  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/search/trending",
    headers: { "x-cg-demo-api-key": "CG-XsE973bwfpbhVofVYWFwMpqi" },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="main-footer-div">
      <h1>You May Also Like</h1>
      <Carousel coins={coins} />
      <h1>Trending Coins</h1>
      <Carousel coins={coins} />
    </div>
  );
};

export default Footer;