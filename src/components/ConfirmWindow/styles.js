import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 450px;
  background: ${({ dark }) => (dark ? "white" : "black")};
  border: 1px solid #f76f39;
  margin: 2em;
`;

export const TextWrapper = styled.div`
  padding: 2em;
  width: 100%;
`;

export const Content = styled.div`
  word-wrap: break-word;
  white-space: normal;
  color: ${({ dark }) => (dark ? "black" : "white")};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const StyledButton = styled.button`
  transition: all 0.1s linear;
  width: ${({ alertButton }) => (alertButton ? "100%" : "50%")};
  outline: 0;
  border: 0;
  padding: 4px;
  cursor: pointer;
  color: ${({ bgColor }) => (bgColor ? "white" : "black")};
  background: ${({ bgColor }) =>
    bgColor ? "#f76f39" : ({ dark }) => (dark ? "lightgray" : "darkgrey")};
  &:hover {
    background: none;
    color: ${({ dark }) => (dark ? "black" : "white")};
  }
`;
