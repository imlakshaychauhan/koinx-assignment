import "./styles/overview.css";
import info from "../assets/info.png";
import Row from "./Row";

const Overview = () => {
  return (
    <div className="overview">
      <h1>Performance</h1>
      <div className="lh-section">
        <div className="low">
          <p>Today's low</p>
          <p>46,930.22</p>
        </div>
        <div className="lh-line"></div>
        <div className="high">
          <p>Today's high</p>
          <p>49,343.83</p>
        </div>
      </div>
      <div className="lh-section">
        <div className="low">
          <p>52W Low</p>
          <p>16,930.22</p>
        </div>
        <div className="lh-line"></div>
        <div className="high">
          <p>52W High</p>
          <p>49,743.83</p>
        </div>
      </div>
      <div className="fundamentals">
        <div className="fundamental-title">
          <p>Fundamentals</p>
          <img src={info} />
        </div>
        <div className="columns">
          <div className="rows">
            <Row name={"Bitcoin Price"} price={'$16,815.46'} />
            <Row name={"24h Low / 24h High"} price={'$16,815.46 / $16,874.12'} />
            <Row name={"7d Low / 7d High"} price={'$16,382.07 / $16,874.12'} />
            <Row name={"Trading Volume"} price={'$23,249,202,782'} />
            <Row name={"Market Cap Rank"} price={'#1'} />
          </div>
          <div className="rows">
            <Row name={"Market Cap"} price={'$323,507,290,047'} />
            <Row name={"Market Cap Dominance"} price={'38.343%'} />
            <Row name={"Volume / Market Cap"} price={'0.0718'} />
            <Row name={"All-Time High"} price={'$69,044.77'} />
            <Row name={"All-Time Low"} price={'$67.81'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
