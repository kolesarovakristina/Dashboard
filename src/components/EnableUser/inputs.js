import React from "react";
import Input from "Components/EnableUser/inputPattern";
import {
  StyledButtonWrapper,
  Button,
  IconWrapper
} from "Components/FormInput/styles";
import ModalLauncher from "Components/Modal/modalLauncher";
import { ModalContent } from "Components/Modal/styles";
import AlertWindow from "Components/AlertWindow/alert";
import PropTypes from "prop-types";
import Error from "Components/Error/error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputWrapper, ButtonWrapper } from "./styles";

const EnableUserInputs = ({
  setPassword,
  dark,
  password,
  setConfirmPassword,
  confirmPassword,
  responseMessage,
  closeModal,
  visibility
}) => (
  <div>
    <InputWrapper>
      <IconWrapper>
        <FontAwesomeIcon
          style={{
            color: "rgb(217, 217, 217)",
            margin: "10px"
          }}
          icon="lock"
        />
      </IconWrapper>
      <Input
        onChange={setPassword}
        type="password"
        placeholder="Enter password"
        dark={dark}
        value={password}
        className={dark ? "black" : "white"}
        minLength={10}
        maxLength={30}
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
        isLogin
      />
    </InputWrapper>

    <InputWrapper>
      <IconWrapper>
        <FontAwesomeIcon
          style={{
            color: "rgb(217, 217, 217)",
            margin: "10px"
          }}
          icon="lock"
        />
      </IconWrapper>
      <Input
        onChange={setConfirmPassword}
        type="password"
        placeholder="Confirm password"
        dark={dark}
        value={confirmPassword}
        className={dark ? "black" : "white"}
        minLength={10}
        maxLength={30}
        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
        isLogin
      />
    </InputWrapper>

    <Error
      errMessage="Password and Confirm Password do not match"
      visibility={visibility}
    />

    <ButtonWrapper>
      <StyledButtonWrapper>
        <Button>Submit</Button>
        <ModalLauncher>
          <ModalContent>
            <AlertWindow
              text={responseMessage}
              alertButton
              confirm="Ok"
              dark={dark}
              onClick={closeModal}
            />
          </ModalContent>
        </ModalLauncher>
      </StyledButtonWrapper>
    </ButtonWrapper>
  </div>
);

EnableUserInputs.propTypes = {
  setPassword: PropTypes.func.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  dark: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  responseMessage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired
};

export default EnableUserInputs;
