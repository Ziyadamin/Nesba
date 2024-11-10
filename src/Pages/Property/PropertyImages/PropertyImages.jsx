import ImageGrid from "./ImageGrid";
import ImageCarousel from "./ImageCarousel";
import useWindowSize from "../../../hooks/useWindowSize";
import "./PropertyImages.scss";

const PropertyImages = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width >= 990 && <ImageGrid />}
      {width < 990 && <ImageCarousel />}
    </>
  );
};

export default PropertyImages;
