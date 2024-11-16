import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";

const SliderContainer = () => {
  const [value, setValue] = useState(1);
  const maxValue = 100;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="slider-container">
      <div className="slider-container-header">
        <span>Number of Shares</span>
        <span>{maxValue} shares left</span>
      </div>
      <div className="slider-container-grey">
        <div className="slider-container-grey-top">
          <Slider
            min={1}
            max={maxValue}
            step={1}
            value={value}
            onChange={handleChange}
            sx={{
              padding: 0,
              color: "#7B43AA",
              height: 8,
              marginRight: "2px",
              "& .MuiSlider-thumb": {
                backgroundColor: "#7B43AA",
                width: 8,
                height: 10,
                borderRadius: "6px",
                "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                  boxShadow: "inherit",
                },
                "&::before": {
                  display: "none",
                },
                "&::after": {
                  display: "none",
                },
              },
              "& .MuiSlider-track": {
                backgroundColor: "#7B43AA",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#7B43AA38",
              },
            }}
          />
          <button
            variant="outlined"
            onClick={() => setValue(value - 1)}
            className={`slider-btn ${value === 1 ? "disabled" : ""}`}
            disabled={value === 1}
          >
            <RemoveIcon />
          </button>
          <button
            variant="outlined"
            onClick={() => setValue(value + 1)}
            className={`slider-btn ${value === maxValue ? "disabled" : ""}`}
            disabled={value === maxValue}
          >
            <AddIcon />
          </button>
        </div>
        <div className="slider-container-grey-bottom">
          <span>{value}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderContainer;
