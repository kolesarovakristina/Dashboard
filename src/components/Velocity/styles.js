import styled from "styled-components";

const NoSprints = styled.div`
  transition: all 0.2s linear;
  width: 100%;
  position: relative;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
  color: ${({ dark }) => (dark ? "black" : "white")};
  margin-top: 0;
  padding: 1.5em;
  text-align: center;
  font-size: 1.1em;
`;

export default NoSprints;
