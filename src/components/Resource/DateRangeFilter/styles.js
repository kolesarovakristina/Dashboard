import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  color: ${({ dark }) =>
    dark === false
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.darkerGrey};
  transition: all 0.2s linear;
`;

export const WrapperFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  background: white;
  padding: 1.5em;
  padding-bottom: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.neutralColor.orange};
  background: ${({ dark }) =>
    dark === true
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
  color: ${({ dark }) =>
    dark === false
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.darkerGrey};
`;

export const StyledSelect = styled.select`
  border: none;
  margin: 5px;
  height: 40px;
  color: ${({ dark }) =>
    dark === false
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.darkerGrey};
  background: ${({ dark }) =>
    dark === true
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
`;

export const Title = styled.span`
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding-right: 1em;
`;
