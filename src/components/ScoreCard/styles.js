import styled from "styled-components";

export const CustomerPerspective = styled.div`
  transition: all 0.2s linear;
  padding: 1.5em 3em;
  padding-top: 3em;
  @media (max-width: 400px) {
    padding: 1.5em;
  }
`;

export const Title = styled.div`
  font-size: 1.2em;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.darkColor.bgNavbar
      : ({ theme }) => theme.neutralColor.white};
  border-bottom: 1px solid
    ${({ dark }) =>
      dark
        ? ({ theme }) => theme.darkColor.bgNavbar
        : ({ theme }) => theme.neutralColor.white};
  padding-bottom: 7px;
  text-align: center;
`;
export const NameWrapper = styled.div`
  color: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.darkColor.bgNavbar
      : ({ theme }) => theme.neutralColor.white};
  font-size: 20px;
`;
