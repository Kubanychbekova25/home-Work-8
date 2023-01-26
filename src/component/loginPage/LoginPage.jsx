import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../UI/Card/Card";
import { Button } from "../UI/Button/Button";

export const LoginForm = ({ onLogin }) => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [isEmailValid, setisEmailValid] = useState(false);
  const [isPasswordValid, setisPasswordValid] = useState(false);
  const [isFormValid, setisFormValid] = useState(false);

  useEffect(() => {
    setisFormValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (e) => {
    setenteredEmail(e.target.value);
    setisEmailValid(enteredEmail.includes("@"));
  };

  const passworChangeHandler = (e) => {
    setenteredPassword(e.target.value);
    setisPasswordValid(enteredPassword.trim().length > 6);
  };
  const validateEmailHandler = () => {
    setisEmailValid(enteredEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    setisPasswordValid(enteredPassword.trim().length > 6);
  };

  useEffect(() => {
    setisFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card>
      <form onSubmit={sumbitHandler}>
        <StyledInputContainer>
          <label htmlFor="">Email</label>

          <StyledInput
            value={enteredEmail}
            type="email"
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </StyledInputContainer>

        <StyledInputContainer>
          <label htmlFor="">Password</label>

          <StyledInput
            value={enteredPassword}
            type="password"
            onChange={passworChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </StyledInputContainer>
        <ButtonContainer>
          <Button bgColor={"success"} disabled={!isFormValid} type="submit">
            login
          </Button>
        </ButtonContainer>
      </form>
    </Card>
  );
};

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const StyledInput = styled.input`
  width: 300px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;
