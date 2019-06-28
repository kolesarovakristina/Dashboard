import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  @media (max-width: 400px) {
    width: 240px;
  }
  padding: 5px 15px;
  background: ${({ dark }) => (dark ? "#6f6f6f" : "#999")};
  border-radius: 5px;
  color: ${({ dark }) => (dark ? "white" : "black")};
  margin: 5px 1em 2em;
`;

export const LegendTitle = styled.span`
  font-size: 0.85em;
  padding-right: 5px;
`;

export const Bar = styled.span`
  display: inline-block;
  font-size: 0.85em;
  font-weight: bold;
`;
