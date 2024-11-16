import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SliderContainer from "./SliderContainer/SliderContainer";
import NesbaButton from "../../../Components/NesbaButton/NesbaButton";
import { IoMdArrowDropright } from "react-icons/io";
import "./WaitlistCard.scss";

const WaitlistCard = () => {
  return (
    <div className="property-card">
      <div className="property-card-header">
        Join the waitlist for priority access
      </div>
      <div className="date-container">
        <WatchLaterIcon />
        <span>Availability Date</span>
      </div>
      <SliderContainer />
      <div className="waitlist-info">
        <div className="row-container">
          <div className="row">
            <span>Pay now</span>
            <span className="purple">No.</span>
          </div>
        </div>
        <div className="row-container">
          <span>Remaining down payments (2)</span>
          <div className="row">
            <span className="sub-info">Date 1</span>
            <span className="dark">No.</span>
          </div>
          <div className="row">
            <span className="sub-info">Date 2</span>
            <span className="dark">No.</span>
          </div>
        </div>
        <div className="row-container">
          <div className="row">
            <span>Monthly payment</span>
            <span className="purple">No.</span>
          </div>
          <div className="row">
            <span>Annual payment</span>
            <span className="purple">No.</span>
          </div>
        </div>
        <div className="row-container">
          <a href="#" className="link">
            <span>Check full payment plan</span>
            <IoMdArrowDropright />
          </a>
        </div>
      </div>
      <div className="button-container">
        <NesbaButton text={"Join with 1 share"} fullWidth borderRadius={"19px"} />
      </div>
    </div>
  );
};

export default WaitlistCard;
