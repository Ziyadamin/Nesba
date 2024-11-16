import DocumentButton from "./DocumentButton";
import "./DocumentsCard.scss";

const DocumentsCard = () => {
  const DocumentButtons = [
    { text: "Download: Unit & Project Details", src: "#" },
    { text: "Download: Investment Details", src: "#" },
    { text: "Download: Payment Policy", src: "#" },
    { text: "Download: Nesba Fees", src: "#" },
    { text: "Download: Ownership Contract Draft", src: "#" },
  ];

  return (
    <div className="property-card">
      <div
        className="property-card-sec-header"
        style={{ marginBottom: "24px" }}
      >
        Documents
        <div className="property-card-sec-header-sub">
          Confidential Property Documents
        </div>
      </div>
      <div className="buttons-container">
        {DocumentButtons.map((button, i) => (
          <div className="doc-button-container" key={i} style={{width: "100%"}}>
            <DocumentButton text={button.text} src={button.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsCard;
