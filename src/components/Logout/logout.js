import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  WrapperLogout,
  UserWrapper,
  LogoutButton,
  User
} from "./logout_styles";

const styleLight = {
  color: "#F76F39",
  background: "#111",
  width: "70px",
  height: "70px",
  padding: "22px"
};

const styleDark = {
  color: "#F76F39",
  background: "#ccc",
  width: "70px",
  height: "70px",
  padding: "22px"
};

class Logout extends Component {
  state = {
    logout: false
  };

  handleLogoutTrue = () => {
    this.setState({ logout: true });
  };

  handleLogoutFalse = () => {
    this.setState({ logout: false });
  };

  handleToggleLogout = () => {
    this.setState({ logout: !this.state.logout });
  };

  render() {
    const { onClick, dark, accessToken } = this.props;
    const { logout } = this.state;

    return (
      <WrapperLogout>
        <LogoutButton
          type="button"
          onClick={onClick}
          logout={logout}
          onMouseEnter={this.handleLogoutTrue}
          onMouseLeave={this.handleLogoutFalse}
        >
          Logout
        </LogoutButton>

        <UserWrapper
          dark={dark}
          onTouchStart={this.handleToggleLogout}
          onMouseEnter={this.handleLogoutTrue}
          onMouseLeave={this.handleLogoutFalse}
        >
          <FontAwesomeIcon style={dark ? styleDark : styleLight} icon="user" />
          <User>
            Hello {accessToken}
            !
            <FontAwesomeIcon
              style={
                logout
                  ? {
                      transform: "rotate(0deg)",
                      transition: "all .2s ease-in-out",
                      marginLeft: ".75em"
                    }
                  : {
                      transform: "rotate(180deg)",
                      transition: "all .2s ease-in-out",
                      marginLeft: ".75em"
                    }
              }
              icon="angle-down"
            />
          </User>
        </UserWrapper>
      </WrapperLogout>
    );
  }
}

Logout.propTypes = {
  accessToken: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Logout;
