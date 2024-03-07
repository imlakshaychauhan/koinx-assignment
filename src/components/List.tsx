import "./styles/list.css";

const List = () => {
  return (
    <div className="list">
        <span style={{ color: "blue" }}>Overview</span>
        <span>Fundamentals</span>
        <span>News Insights</span>
        <span>Sentiments</span>
        <span>Team</span>
        <span>Technicals</span>
        <span>Tokenomics</span>
        <div className="line"></div>
    </div>
  )
}

export default List