import "./styles/sentiment.css";
import info from "../assets/info.png";
import KeyCard from "./KeyCard";

const Sentiment = () => {
  return (
    <div className="sentiment-div">
      <h1>Sentiment</h1>
      <div className="key-heading">
        <p>Key Events</p>
        <img src={info} />
      </div>
      <div className="key-card-div">
        <KeyCard />
        <KeyCard />
      </div>
      <div className="key-heading">
        <p>Analyst Estimates</p>
        <img src={info} />
      </div>
      <div className="estimates-div">
        <div className="circle">
          <p>67</p>
          <span>%</span>
        </div>
        <div className="info-div">
          <div className="single-info">
            <p>Buy</p>
            <div className="f-bar"></div>
            <span>76%</span>
          </div>
          <div className="single-info">
            <p>Hold</p>
            <div className="s-bar"></div>
            <span>8%</span>
          </div>
          <div className="single-info">
            <p>Sell</p>
            <div className="t-bar"></div>
            <span>16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
