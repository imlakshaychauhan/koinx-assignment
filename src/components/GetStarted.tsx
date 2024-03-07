import "./styles/getstarted.css";
import getStarted from "../assets/get-started.png";
import TrendingCoins from "./TrendingCoins";

const GetStarted = () => {
  return (
    <>
    <div className="getMain">
        <div className="m">
        <p className="getHeading">Get Started with KoinX for FREE</p>
        <p className="desc">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
        </div>
        <div className="getDiv">
        <img src={getStarted} />
        <button className="getBtn">Get Started for FREE</button>
        </div>
    </div>
    <div>
      <TrendingCoins />
    </div>
    </>
  )
}

export default GetStarted