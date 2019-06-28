import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuItem = styled(NavLink)`
  transition: all 0.2s linear;
  color: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.darkColor.darkGrey
      : ({ theme }) => theme.neutralColor.white};
  cursor: pointer;
  width: 100%;
  display: ${({ isAdmin }) => (isAdmin ? "inline-block" : "none")}

  font-size: 1.15em;
  margin: .5em 0;
  &:hover {
    text-decoration: none;
    color: ${({ dark }) =>
      dark
        ? ({ theme }) => theme.lightColor.lightGrey
        : ({ theme }) => theme.lightColor.lighterGrey};
  }
  &:focus {
    color: ${({ dark }) =>
      dark
        ? ({ theme }) => theme.darkColor.darkGrey
        : ({ theme }) => theme.neutralColor.white};
    text-decoration: none;
  }
`;
export default MenuItem;
