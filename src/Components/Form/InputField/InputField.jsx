import { InputAdornment, TextField } from "@mui/material";
import '../Form.css';

const InputField = ({ img, placeholder, value, handleChange, isPassword = false }) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder={placeholder}
      name={placeholder}
      value={value}
      onChange={handleChange}
      hiddenLabel
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <img src={img} alt="input-adornment" className="img-adornment"/>
            </InputAdornment>
          ),
        },
      }}
      variant="filled"
      fullWidth
      size="large"
      type={isPassword ? "password" : "text"}
      className="input-field"
      required
    />
  );
};

export default InputField;
