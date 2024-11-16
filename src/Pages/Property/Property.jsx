import { Box, Container } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import HeaderBar from "../../Components/Header";
import PropertyImages from "./PropertyImages/PropertyImages";
import WaitlistCard from "./WaitlistCard/WaitlistCard";
import FinancialsCard from "./FinancialsCard/FinancialsCard";
import TextCard from "./TextCard/TextCard";
import Footer from "../../Components/Footer/Footer";
import DocumentsCard from "./DocumentsCard/DocumentsCard";
import TimelineCard from "./TimelineCard/TimelineCard";
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
            <TextCard
              header={"Developer and Property Manager"}
              buttonText={"Visit Developer Website"}
            />
            <TextCard header={"Project"} buttonText={"Project Master Plan"} />
            <TextCard header={"Unit"} tags />
            <TimelineCard />
          </div>
          <div className="right-container">
            <WaitlistCard />
            <FinancialsCard />
            <DocumentsCard />
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Property;
