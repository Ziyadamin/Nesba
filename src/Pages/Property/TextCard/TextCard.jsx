import { Container } from "@mui/material";
import { MdPool } from "react-icons/md";
import { LiaDumbbellSolid } from "react-icons/lia";
import NesbaButton from "../../../Components/NesbaButton/NesbaButton";
import "./TextCard.scss";

const TextCard = ({ header, buttonText, tags = false }) => {
  return (
    <div className="property-card">
      <Container>
        <div className="property-card-header" style={{ marginBottom: "24px" }}>
          {header}
        </div>
        <p className="property-card-p">
          quis eros tempus lacinia. Nam bibendum
        </p>
        <p className="property-card-p">
          pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis
          sed leo vestibulum venenatis. Suspendisse quis arcu sem.
        </p>
        <p className="property-card-p">
          Aenean feugiat ex eu vestibulum vestibulum.
        </p>
        {buttonText && (
          <div style={{ marginTop: "30px" }}>
            <NesbaButton text={buttonText} />
          </div>
        )}
        {tags && <div className="tags-container">
            <div className="tag">
              <LiaDumbbellSolid />
              <span>Gym</span>
            </div>
            <div className="tag">
              <MdPool />
              <span>Pool</span>
            </div>
          </div>}
      </Container>
    </div>
  );
};

export default TextCard;
