import { useState } from "react";
import InputField from "./InputField/InputField";
import "./Form.css";

const Form = ({ isLoggingIn, handleChangeLoggedIn }) => {
  const [inputValues, setInputValues] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLoggingIn && (
        <p className="form-info" style={{ marginBottom: "1rem" }}>
          Don't have an account?{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={handleChangeLoggedIn}
          >
            Sign up
          </span>
        </p>
      )}
      {!isLoggingIn && (
        <>
          <p className="form-info">or use your email for registeration</p>
          <InputField
            img="/img/auth/name-input.png"
            placeholder="Name"
            value={inputValues.Name}
            handleChange={handleChange}
          />
        </>
      )}
      <InputField
        img="/img/auth/email-input.png"
        placeholder="Email"
        value={inputValues.Email}
        handleChange={handleChange}
      />
      <InputField
        img="/img/auth/password-input.png"
        placeholder="Password"
        isPassword
        value={inputValues.Password}
        handleChange={handleChange}
      />
      {!isLoggingIn && (
        <p className="form-info" style={{marginTop: '.5rem'}}>
          Already have an account?{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={handleChangeLoggedIn}
          >
            Log in
          </span>
        </p>
      )}
      {isLoggingIn && (
        <p className="form-info forgot-password">Forgot your password?</p>
      )}
      <button type="submit" className="submit-button">
        {isLoggingIn ? "Log in" : "Sign up"}
      </button>
    </form>
  );
};

export default Form;
