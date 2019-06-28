import styled from "styled-components";

export const Wrapper = styled.div`
  transition: all 0.2s linear;
  width: 100%;
  position: relative;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
`;

export const Title = styled.h5`
  color: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.darkColor.darkGrey
      : ({ theme }) => theme.neutralColor.white};
  text-align: center;
  padding-top: 1.5em;
  margin-bottom: 0;
`;
