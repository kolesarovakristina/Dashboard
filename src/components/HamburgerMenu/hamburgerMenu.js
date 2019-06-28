import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "Components/Logo";
import PropTypes from "prop-types";
import FixedWrapper from "./styles";

const iconStyle = {
  color: "#f76f39",
  alignSelf: "center",
  display: "flex",
  fontSize: 25,
  cursor: "pointer",
  width: 30
};

const HamburgerMenu = ({
  click, logo, dark, icon
}) => (
  <FixedWrapper dark={dark}>
    <FontAwesomeIcon
      onClick={click}
      style={iconStyle}
      icon={icon}
    />
    <Logo logo={logo} />
  </FixedWrapper>
);

HamburgerMenu.propTypes = {
  click: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired
};

export default HamburgerMenu;
