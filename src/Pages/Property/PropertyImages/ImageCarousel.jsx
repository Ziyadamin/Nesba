import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ImageCarousel = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    "/img/property/test1.jpg",
    "/img/property/test2.jpg",
    "/img/property/test1.jpg",
    "/img/property/test2.jpg",
    "/img/property/test1.jpg",
    "/img/property/test2.jpg",
    "/img/property/test1.jpg",
    "/img/property/test2.jpg",
    "/img/property/test1.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="img-carousel">
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"100%"}
          />
        </div>
      )}
      {!loading && (
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          className="img-carousel"
          renderIndicator={(clickHandler, isSelected, index, label) => {
            return (
              <li
                onClick={clickHandler}
                className={`ind ${isSelected ? "active" : ""}`}
                key={index}
                role="button"
                aria-label={label}
              />
            );
          }}
        >
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ImageCarousel;
