import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;
export const ItemWrapper = styled.div`
  text-align: center;
  color: ${({ dark }) => (dark ? "white" : "black")};
  padding: 5px 15px 0;
  @media (max-width: 400px) {
    padding: 5px 0 0;
  }
`;

export const Bar = styled.span`
  transition: all 0.2s linear;
  @media (max-width: 400px) {
    margin: 0;
    border-radius: 0;
    font-size: 0.75em;
    width: 80px;
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  width: 104.5px;
  margin: 0 2.5px;
  text-align: center;
  height: 25px;
  line-height: 25px;
  background: ${({ color }) => color};
  border-radius: 5px;
  display: inline-block;
  font-size: 0.85em;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
export const Title = styled.span`
  color: ${({ dark }) =>
    dark === false
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.darkerGrey};
`;
