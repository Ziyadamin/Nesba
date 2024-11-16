import NesbaAccordion from '../../../Components/NesbaAccordion/NesbaAccordion';

const FinancialsCard = () => {
  return (
    <div className="property-card">
        <div className="property-card-sec-header" style={{marginBottom: "24px"}}>
            Financials
        </div>
        <NesbaAccordion summary={"Transaction Details"} details={"Some text"} />
        <NesbaAccordion summary={"Rental Breakdown"} details={"Some Other text"} />
    </div>
  )
}

export default FinancialsCard