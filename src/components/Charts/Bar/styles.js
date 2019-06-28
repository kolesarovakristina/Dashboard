import styled from "styled-components";

const Wrapper = styled.div`
  transition: all 0.2s linear;
  width: 100%;
  position: relative;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
`;

export default Wrapper;
