import WatchLaterIcon from '@mui/icons-material/WatchLater';
import "./WaitlistCard.scss";

const WaitlistCard = () => {
  return (
    <div className="property-card">
      <div className="property-card-header">
        Join the waitlist for priority access
      </div>
      <div className="date-container">
        <WatchLaterIcon />      
        {/* <img src="/img/property/clock-icon.png" alt="clock" /> */}
        <span>Availability Date</span>
      </div>
    </div>
  );
};

export default WaitlistCard;
