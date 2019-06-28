import React from "react";
import PropTypes from "prop-types";
import { LogoWrapper, Logo } from "./styles";

const LogoComp = ({ logo, loginLogo }) => (
  <LogoWrapper>
    <Logo src={logo} alt="globallogic" loginLogo={loginLogo} />
  </LogoWrapper>
);

LogoComp.propTypes = {
  logo: PropTypes.objectOf(PropTypes.any).isRequired,
  loginLogo: PropTypes.bool
};

LogoComp.defaultProps = {
  loginLogo: null
};

export default LogoComp;
