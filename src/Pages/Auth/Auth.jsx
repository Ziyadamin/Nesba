import { useState } from "react";
import Form from "../../Components/Form/Form";
import "./Auth.css";

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleChangeLoggedIn = () => {
    setIsLoggingIn(!isLoggingIn);
  };

  return (
    <div
      className="page-container"
      style={{ flexDirection: isLoggingIn ? "row-reverse" : "row" }}
    >
      <img src={`/img/nesba-logo-${!isLoggingIn ? 'white' : 'black'}.png`} alt="nesba-logo" className="logo" />
      <div className="colored-container">
        <p className="title">
          {isLoggingIn ? "Welcome Back" : "Welcome to Nesba"}
        </p>
      </div>
      <div className="white-container">
        {!isLoggingIn && <h2>Create Account</h2>}
        <div className="logo-container">
          <div className="logo-circular-container">
            <img src="/img/auth/Facebook.png" alt="facebook-logo" />{" "}
          </div>
          <div className="logo-circular-container">
            <img src="/img/auth/Group.png" alt="group-logo" />
          </div>
          <div className="logo-circular-container">
            <img src="/img/auth/LinkedIn.png" alt="linkedin-logo" />
          </div>
        </div>
        <Form
          isLoggingIn={isLoggingIn}
          handleChangeLoggedIn={handleChangeLoggedIn}
        />
      </div>
    </div>
  );
};

export default Auth;
