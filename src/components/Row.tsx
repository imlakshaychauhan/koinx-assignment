interface RowProps {
  name: string;
  price: string;
}

const Row: React.FC<RowProps> = ({ name, price }) => {
  return (
    <div className="row">
      <div className="row-content">
        <p className="row-price">{name}</p>
        <p className="row-currency">{price}</p>
      </div>
      <div>
        <div className="row-line"></div>
      </div>
    </div>
  );
};

export default Row;
