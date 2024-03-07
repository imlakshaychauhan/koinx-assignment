import About from "./About";
import List from "./List";
import Overview from "./Overview";
import Sentiment from "./Sentiment";
import Team from "./Team";
import Tokenomics from "./Tokenomics";
import TradingViewWidget from "./TradingViewWidget";
import "./styles/singlecurrency.css";

const SingleCurrency = ({ bitcoinPrice }) => {
  const usd = bitcoinPrice.usd;
  const usd_24h_change = bitcoinPrice.usd_24h_change;

  // Calculate the new value after 24 hours
  const newInr = usd * (1 + usd_24h_change);

  // Calculate the percentage change
  const percentageChange = (((newInr - usd) / usd) * 100).toFixed(1);

  return (
    <>
      <div className="s-container">
        <div className="top">
          <div className="heading">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" />
            <p className="currency">
              Bitcoin <span>BTC</span>
            </p>
            <p className="f-rank">Rank #1</p>
          </div>
          <div className="prices">
            <div className="price">
              <p className="d-price">$ {bitcoinPrice.usd}</p>
              <p className="r-price">₹ {bitcoinPrice.inr}</p>
            </div>
            <div className="price-title">
              <p className="hike">{percentageChange}%</p>
              <p className="time">(24H)</p>
            </div>
          </div>
        </div>
        <TradingViewWidget />
      </div>
      <List />
      <Overview />
      <Sentiment />
      <About />
      <Tokenomics />
      <Team />
    </>
  );
};

export default SingleCurrency;
