import { Button } from "@mui/material";

const NesbaButton = ({ text, borderRadius, fullWidth = false }) => {
  const style = {
    backgroundColor: "#7B43AA",
    color: "#fff",
    textTransform: "none",
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    borderRadius: borderRadius || "10px",
    boxShadow: "0px 4px 4px 0px #00000040",
    padding: "8px 12px",
    "&:hover": {
      backgroundColor: "#7F4FA2",
      boxShadow: "0px 6px 8px 0px rgba(0, 0, 0, 0.3)", // Enhanced shadow on hover
    },
  };

  return (
    <Button variant="contained" sx={style} fullWidth={fullWidth}>
      {text}
    </Button>
  );
};

export default NesbaButton;
