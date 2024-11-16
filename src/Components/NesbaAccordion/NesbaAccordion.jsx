import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NesbaAccordion = ({ summary, details }) => {
  return (
    <Accordion
      square
      sx={{
        borderRadius: "11px",
        "&:before": {
          display: "none",
        },
        boxShadow: "0px 4px 4px 0px #00000040",
        marginBottom: "8px",
        padding: "7px",
      }}
    >
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon style={{ color: "#000" }} />}
        aria-controls="panel2-content"
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: "Urbanist, sans-serif",
          }}
        >
          {summary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: "Urbanist, sans-serif",
          }}
        >
          {details ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default NesbaAccordion;
