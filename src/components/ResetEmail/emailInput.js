import React from "react";
import PropTypes from "prop-types";
import blackLogo from "Assets/gl_logo.png";
import whiteLogo from "Assets/gl_logo_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalLauncher from "Components/Modal/modalLauncher";
import { ModalContent } from "Components/Modal/styles";
import AlertWindow from "Components/AlertWindow/alert";
import { removeTokenFromLocalStorage } from "../../utils/utils";
import Input from "Components/FormInput";
import {
  StyledButtonWrapper,
  Button,
  StyledText,
  Title,
  IconWrapper,
  InputWrapper,
  StyledWrapper
} from "Components/FormInput/styles";
import {
  LogoWrapper,
  Logo,
  Description,
  StyledForm
} from "Components/EnableUser/styles";

class EmailInput extends React.Component {
  state = {
    email: ""
  };
  setEmail = e => {
    this.setState({
      email: e.target.value.trim()
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const { sendEmailAction } = this.props;
    const { email } = this.state;
    sendEmailAction(email);
  };

  render() {
    const {
      themeColor,
      closeModalAction,
      responseMessage,
      history
    } = this.props;
    const { email } = this.state;
    return (
      <StyledWrapper dark={themeColor}>
        <StyledForm onSubmit={this.onSubmit}>
          <LogoWrapper>
            <Logo src={themeColor ? blackLogo : whiteLogo} />
          </LogoWrapper>
          <StyledText>
            <Title dark={themeColor}>Forgot your password?</Title>
          </StyledText>
          <Description dark={themeColor}>
            If you have forgotten your password, please enter your account's
            email address below and click the "Send Email" button.You will
            receive an email that contains a link to set a new password.
          </Description>
          <InputWrapper>
            <IconWrapper>
              <FontAwesomeIcon
                style={{
                  color: "rgb(217, 217, 217)",
                  margin: "10px"
                }}
                icon="envelope"
              />
            </IconWrapper>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={this.setEmail}
              onSubmit={this.onSubmit}
              placeholder="Enter email"
              autocomplete="off"
              className={themeColor ? "black" : "white"}
              dark={themeColor}
              minLength={10}
              responseMessage="ok"
              onClick={() => {
                closeModalAction(false);
              }}
            />
          </InputWrapper>
          <StyledButtonWrapper>
            <Button>Send Email</Button>
          </StyledButtonWrapper>
        </StyledForm>
        <ModalLauncher>
          <ModalContent>
            <AlertWindow
              text={responseMessage}
              alertButton
              confirm="Ok"
              dark={themeColor}
              onClick={() => {
                closeModalAction(false);
                removeTokenFromLocalStorage();
                history.push("/login");
              }}
            />
          </ModalContent>
        </ModalLauncher>
      </StyledWrapper>
    );
  }
}
EmailInput.propTypes = {
  sendEmailAction: PropTypes.func,
  themeColor: PropTypes.bool.isRequired,
  closeModalAction: PropTypes.func.isRequired
};
EmailInput.defaultProps = {
  sendEmailAction: () => null
};
export default EmailInput;
