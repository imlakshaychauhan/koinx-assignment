import "./styles/card.css";

interface Coin {
  item: {
    thumb: string;
    symbol: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
      price: number;
      sparkline: string;
    };
  };
}

const Card: React.FC<{ coin: Coin }> = ({ coin }) => {
  const thumb = coin?.item?.thumb;
  const symbol = coin?.item?.symbol;
  const percent = (coin?.item?.data?.price_change_percentage_24h?.usd ?? 0).toFixed(2);
  const price = coin?.item?.data?.price;
  const sparkline = coin?.item?.data?.sparkline;
    
  return (
    <div className="card">
      <div className="first-card-div">
        <img src={thumb} className="thumb" alt="Coin Thumbnail" />
        <p className="name">{symbol}</p>
        <p className="percent">{percent > 0 ? "+" : "-"} {percent}</p>
      </div>
      <p className="price">{price}</p>
      <img src={sparkline} className="sparkline" alt="Sparkline" />
    </div>
  );
};

export default Card;