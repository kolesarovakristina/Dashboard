import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
  padding: 2em;
  padding-top: 0;
  transition: all 0.2s linear;
`;

export default Wrapper;
