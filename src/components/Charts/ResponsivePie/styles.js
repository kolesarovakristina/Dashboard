import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all 0.2s linear;
  width: ${({ halfWidth }) => (halfWidth ? "50%" : "100%")};
  position: relative;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
  display: inline-block;
`;
export const ChartsNamesWrapper = styled.div`
  text-align: center;
  color: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.darkColor.bgNavbar
      : ({ theme }) => theme.neutralColor.white};
  font-size: 20px;
  padding-top: 30px;
`;
