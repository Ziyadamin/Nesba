import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";

const ImageGrid = () => {
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

  if (!loading && images.length < 5) {
    return (
      <div className="general-grid-container few-images-container">
        <img src={images[0]} alt="property" />
        <div className="see-all">
          <PhotoSizeSelectActualIcon
            fontSize="small"
            sx={{ color: "#7B43AA" }}
          />
          <span>{images.length} Photos</span>
        </div>
      </div>
    );
  }

  return (
    <div className="general-grid-container grid-container">
      {loading &&
        Array.from(new Array(5)).map((_, index) => (
          <div key={index} className="item">
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={"100%"}
              sx={{ borderRadius: "19px", cursor: "auto" }}
            />
          </div>
        ))}
      {!loading && (
        <>
          {images.slice(0, 5).map((image, index) => (
            <div key={index} className="item">
              <img src={image} alt="property" />
            </div>
          ))}
          <div className="see-all">
            <PhotoSizeSelectActualIcon
              fontSize="small"
              sx={{ color: "#7B43AA" }}
            />
            <span>{images.length} Photos</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageGrid;
