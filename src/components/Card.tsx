import "./styles/card.css";

const Card = ({coin}) => {
    const thumb = coin?.item?.thumb;
    const symbol = (coin?.item?.symbol);
    const percent = (coin?.item?.data?.price_change_percentage_24h?.usd).toFixed(2);
    const price = (coin?.item?.data?.price);
    const sparkline = (coin?.item?.data?.sparkline);
    
  return (
    <div className="card">
        <div className="first-card-div">
        <img src={thumb} className="thumb" />
        <p className="name">{symbol}</p>
        <p className="percent">{percent > 0 ? "+" : "-"} {percent}</p>
        </div>
        <p className="price">{price}</p>
        <img src={sparkline} className="sparkline" />
    </div>
  )
}

export default Card