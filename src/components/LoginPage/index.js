import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import blackLogo from "../../assets/gl_logo.png";
import whiteLogo from "../../assets/gl_logo_white.png";
import Logo from "../Logo";
import {
  StyledWrapper,
  Title,
  Button,
  StyledText,
  IconWrapper,
  InputWrapper,
  StyledButtonWrapper,
  ForgotPasswordWrapper
} from "../FormInput/styles";
import Error from "../Error/error";
import { isUser, getDecocedToken } from "../../utils/utils";

class LoginPage extends React.Component {
  state = {
    username: "",
    password: "",
    loginLogo: true
  };

  componentWillReceiveProps(nextProps) {
    const { accessToken } = nextProps;
    const { history, teamFilterAction } = this.props;
    if (nextProps.accessToken && accessToken.exp * 1000 > Date.now()) {
      const token = getDecocedToken();
      if (isUser()) {
        teamFilterAction(token.teamId, token.teamName);
      }
      history.push("/home");
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const { handleLogin } = this.props;
    const { username, password } = this.state;
    handleLogin(username.toLowerCase(), password);
  };

  render() {
    const { themeColor, errMessage } = this.props;
    const { username, password, loginLogo } = this.state;
    return (
      <StyledWrapper dark={themeColor}>
        <Logo
          logo={themeColor ? blackLogo : whiteLogo}
          dark={themeColor}
          loginLogo={loginLogo}
        />
        <form onSubmit={this.onSubmit}>
          <StyledText>
            <Title dark={themeColor}>
              Use your GlobalLogic credential to login
            </Title>
          </StyledText>

          <InputWrapper>
            <IconWrapper>
              <FontAwesomeIcon
                style={{
                  color: "rgb(217, 217, 217)",
                  margin: "10px"
                }}
                icon="user"
              />
            </IconWrapper>
            <FormInput
              onChange={e => this.setState({ username: e.target.value.trim() })}
              onSubmit={this.onSubmit}
              value={username}
              type="text"
              name="username"
              placeholder="username"
              autocomplete="off"
              className={themeColor ? "black" : "white"}
              dark={themeColor}
              isLogin
              minLength={10}
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
            <FormInput
              onSubmit={this.onSubmit}
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
              type="password"
              name="password"
              placeholder="password"
              autocomplete="off"
              className={themeColor ? "black" : "white"}
              dark={themeColor}
              isLogin
            />
          </InputWrapper>
          <Error errMessage={errMessage} />
          <StyledButtonWrapper>
            <Button type="submit">Login</Button>
          </StyledButtonWrapper>
        </form>
        <ForgotPasswordWrapper to={`/users/token`}>Forgot password?</ForgotPasswordWrapper>
      </StyledWrapper>
    );
  }
}

LoginPage.propTypes = {
  accessToken: PropTypes.objectOf(PropTypes.any),
  handleLogin: PropTypes.func,
  history: PropTypes.objectOf(PropTypes.any),
  themeColor: PropTypes.bool,
  teamFilterAction: PropTypes.func,
  errMessage: PropTypes.string
};

LoginPage.defaultProps = {
  accessToken: null,
  handleLogin: () => null,
  history: {},
  themeColor: false,
  teamFilterAction: () => null,
  errMessage: ""
};

export default LoginPage;
