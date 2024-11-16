import { Container } from "@mui/material";
import { FaRegCalendar, FaCheckCircle } from "react-icons/fa";
import "./TimelineCard.scss";

const TimelineCard = () => {
  return (
    <div className="property-card">
      <Container>
        <div className="property-card-header" style={{ marginBottom: "24px" }}>
          <FaRegCalendar style={{ fontSize: "38px" }} />
          Funding Timeline
        </div>
        <ul className="timeline-container">
          <li className="done">
            <FaCheckCircle />
            <div className="timeline-container-header">
              Property Funding Complete
            </div>
            <div className="timeline-container-date">Date</div>
            <div className="timeline-container-description">Description</div>
          </li>
          <li className="active">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <div className="timeline-container-header">
              Ownership Documents Distributed
            </div>
            <div className="timeline-container-date">Date</div>
            <div className="timeline-container-description">Description</div>
          </li>
          <li className="non-active">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <div className="timeline-container-header">
              First Installment Payment
            </div>
            <div className="timeline-container-date">Date</div>
            <div className="timeline-container-description">Description</div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default TimelineCard;
