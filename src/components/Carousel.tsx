import { useRef } from "react";
import "./styles/footer.css";
import Card from "./Card";
import left from "../assets/left.png";
import right from "../assets/right.png";

const Carousel = ({coins}) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust scroll amount as needed
        behavior: "smooth", // Optional: Add smooth scrolling behavior
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust scroll amount as needed
        behavior: "smooth", // Optional: Add smooth scrolling behavior
      });
    }
  };
  return (
    <div className="footer-div">
      <div className="scroll-buttons">
        <img onClick={scrollLeft} src={left} />
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
        <img onClick={scrollRight} src={right} />
      </div>
    </div>
  );
};

export default Carousel;
