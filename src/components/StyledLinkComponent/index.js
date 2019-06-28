import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledLinkComponent, Title } from "./styles";

const StyledLink = ({
  dark,
  href,
  activeClass,
  children,
  style,
  icon,
  isIcon
}) => (
  <StyledLinkComponent
    dark={dark.toString()}
    to={href}
    activeStyle={activeClass}
    exact
  >
    {isIcon ? <FontAwesomeIcon style={style} icon={icon} /> : ""}
    <Title isIcon={isIcon}>{children}</Title>
  </StyledLinkComponent>
);

StyledLink.propTypes = {
  dark: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  activeClass: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  icon: PropTypes.string,
  isIcon: PropTypes.bool
};

StyledLink.defaultProps = {
  icon: null,
  isIcon: null,
  style: null
};

export default StyledLink;
