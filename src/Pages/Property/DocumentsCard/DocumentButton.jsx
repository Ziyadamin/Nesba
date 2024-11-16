import { Button } from "@mui/material";
import { MdOutlineCloudDownload } from "react-icons/md";

const DocumentButton = ({ text, src = "#" }) => {
  const style = {
    fontFamily: "Urbanist, sans-serif",
    fontSize: "13px",
    color: "#747474",
    textTransform: "none",
    border: "1px solid #747474",
    borderRadius: "19px",
    padding: "12px",
    justifyContent: "flex-start",
    paddingLeft: "24px",
    gap: "8px",
    "&:hover": {
      borderColor: "#7B43AA",
      color: "#7B43AA",
      backgroundColor: "#fff",
    },
  };

  return (
    <a href={src} download>
      <Button
        variant="outlined"
        startIcon={<MdOutlineCloudDownload />}
        fullWidth
        sx={style}
      >
        {text}
      </Button>
    </a>
  );
};

export default DocumentButton;
