import styled from "styled-components";

export const StyledWrapper = styled.div`
  color: ${({ dark }) =>
    dark === false
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.darkerGrey};
  padding: 0.5em 0;
  display: ${({ isUser }) => (isUser ? "none" : "block")};
`;

export const StyledDiv = styled.div`
  width: 100%;
`;

export const StyledContentWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  max-height: 135px;
  background: ${({ dark }) => (dark ? "#eee" : "#222")};
  border-radius: 2.5px;
`;

export const StyledContent = styled.div`
  transition: all 0.2s linear;
  display: ${({ isHidden }) => (isHidden === true ? "none" : "block")};
  height: 150px;
  width: 100%;
  padding-bottom: 1em;
  overflow-y: scroll;
`;

export const StyledToggler = styled.div`
  width: 100%;
  font-size: 18px;
`;

export const StyledCheckbox = styled.input`
  display: inline-block;
  margin-right: 10px;
`;

export const StyledDisabledWrapper = styled.div`
  width: 100%;
  font-size: 18px;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  position: relative;
  font-size: 16px;
  padding: 0px 10px;
  color: ${({ dark }) => (dark ? "#555" : "#a3a3a3")};
  &:hover {
    text-decoration: none;
    color: ${({ dark }) => (dark ? "black" : "white")};
  }
`;

export const StyledInput = styled.input`
  display: inline-block;
  margin-right: 10px;
  align-self: center;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.06em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const LabelWrapper = styled.div``;
