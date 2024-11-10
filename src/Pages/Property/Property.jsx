import { Box, Container } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import HeaderBar from "../../Components/Header";
import PropertyImages from "./PropertyImages/PropertyImages";
import WaitlistCard from "./WaitlistCard/WaitlistCard";
import "./Property.scss";

const Property = () => {
  const { width } = useWindowSize();

  return (
    <>
      <HeaderBar />
      <Container maxWidth="lg" className={`${width < 990 && "padding-zero"}`}>
        <PropertyImages />
        <Box className="property-info-container">
          <div className="left-container">

          </div>
          <div className="right-container">
            <WaitlistCard />
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Property;
