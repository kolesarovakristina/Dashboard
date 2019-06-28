import React, { Component } from "react";
import PropTypes from "prop-types";
import blackLogo from "Assets/gl_logo.png";
import whiteLogo from "Assets/gl_logo_white.png";
import { StyledForm, LogoWrapper, Logo, Title, Description } from "../EnableUser/styles";
import ForgotPasswordInputs from "../EnableUser/inputs";
import ModalLauncher from "../Modal/modalLauncher";
import { ModalContent } from "../Modal/styles";
import AlertWindow from "../AlertWindow/alert";
import { removeTokenFromLocalStorage } from "../../utils/utils";
import { StyledWrapper } from "../FormInput/styles";

class ForgotPasswordPage extends Component {
  state = {
    password: "",
    confirmPassword: "",
    passwordMatch: false
  };

  setPassword = e => {
    this.setState({
      password: e.target.value.trim(),
      passwordMatch: false
    });
  };

  setConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value.trim(),
      passwordMatch: false
    });
  };

  enableUser = e => {
    const { resetPasswordAction } = this.props;
    const { password, confirmPassword } = this.state;
    e.preventDefault();
    const data = [];
    if (password === confirmPassword) {
      data.push(password, this.props.match.params.token);
      resetPasswordAction(data);
    } else {
      this.setState({ passwordMatch: true });
    }
  };
  

  render() {
    const { themeColor, closeModalAction, responseMessage } = this.props;
    const { password, confirmPassword, passwordMatch } = this.state;

    return (
      <StyledWrapper dark={themeColor}>
        <StyledForm onSubmit={this.enableUser}>
          <LogoWrapper>
            <Logo src={themeColor ? blackLogo : whiteLogo} />
          </LogoWrapper>
          <Title dark={themeColor}>Please set your new password.</Title>
          <Description>
            (Password must contains at least 10 characters, including at least
            one number and includes both lower and uppercase letters.)
          </Description>
          <ForgotPasswordInputs
            dark={themeColor}
            setPassword={this.setPassword}
            setConfirmPassword={this.setConfirmPassword}
            password={password}
            confirmPassword={confirmPassword}
            responseMessage="ok"
            closeModal={() => {
              closeModalAction(false);
            }}
            visibility={passwordMatch}
          />
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
                window.location.pathname = "/login";
              }}
            />
          </ModalContent>
        </ModalLauncher>
      </StyledWrapper>
    );
  }
}
ForgotPasswordPage.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  resetPasswordAction: PropTypes.func.isRequired
};
export default ForgotPasswordPage;