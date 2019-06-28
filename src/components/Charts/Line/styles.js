import styled from "styled-components";

const Wrapper = styled.div`
  transition: all 0.2s linear;
  width: 100%;
  height: 550px;
  position: relative;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
`;

export default Wrapper;
