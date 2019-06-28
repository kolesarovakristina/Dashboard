import styled from "styled-components";

const FixedWrapper = styled.div`
  position: fixed;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.lightColor.bgNavbar
      : ({ theme }) => theme.darkColor.bgNavbar};
  box-shadow: 0 0 7px 0 ${({ dark }) => (dark ? "darkgrey" : "black")};
  z-index: 10000;
  display: flex;
  text-align: center;
  width: 100%;
  height: 70px;
  transition: all 0.2s linear;
  justify-content: center;
`;

export default FixedWrapper;
