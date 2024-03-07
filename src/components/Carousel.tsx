import { useRef } from "react";
import "./styles/footer.css";
import Card from "./Card";
import left from "../assets/left.png";
import right from "../assets/right.png";

interface Coin {
  // Define the structure of the coin object
  // Adjust these properties according to your API response
  i: string;
  // Add other properties here
}

interface CarouselProps {
  coins: Coin[]; // Specify the type of the coins prop
}

const Carousel: React.FC<CarouselProps> = ({ coins }) => {
  const carouselRef = useRef<HTMLDivElement>(null); // Initialize with null and specify the type

  const scrollLeft = () => {
    if (carouselRef.current) {
      (carouselRef.current as HTMLDivElement).scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      (carouselRef.current as HTMLDivElement).scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="footer-div">
      <div className="scroll-buttons">
        <img onClick={scrollLeft} src={left} alt="Scroll Left" />
      </div>
      <div className="carousel overflow-hidden" ref={carouselRef}>
        <div className="carousel-items">
          {coins.map((coin, i) => (
            <div key={coin.i} className="item">
              <Card coin={coin} />
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-buttons">
        <img onClick={scrollRight} src={right} alt="Scroll Right" />
      </div>
    </div>
  );
};

export default Carousel;