import React, { Component } from "react";
import StyledLink from "Components/StyledLinkComponent";
import PropTypes from "prop-types";
import Wrapper from "./styles";
import theme from "../../styles/themes/default";

const activeClassDark = {
  background: theme.darkColor.bgNavbar,
  color: "white",
  fontSize: "1.2em"
};

const activeClassLight = {
  background: "white",
  color: theme.darkColor.bgNavbar,
  fontSize: "1.2em"
};

const iconStyle = {
  color: "#f76f39",
  fontSize: "1.25em",
  display: "flex",
  margin: "0 10px",
  alignSelf: "center"
};

class UserManagmentMenu extends Component {
  state = {
    link: [
      {
        id: 0,
        href: "/usermanagment",
        name: "All Users",
        icon: "users-cog"
      },
      {
        id: 1,
        href: "/usermanagment/addnewuser",
        name: "Add New User",
        icon: "user-plus"
      }
    ]
  };

  render() {
    const { dark } = this.props;
    const { link } = this.state;
    const activeClass = dark ? activeClassLight : activeClassDark;
    return (
      <Wrapper>
        {link.map(item => (
          <StyledLink
            href={item.href}
            dark={dark}
            activeClass={activeClass}
            key={item.id}
            style={iconStyle}
            icon={item.icon}
            isIcon
          >
            {item.name}
          </StyledLink>
        ))}
      </Wrapper>
    );
  }
}

UserManagmentMenu.propTypes = {
  dark: PropTypes.bool.isRequired
};

export default UserManagmentMenu;
