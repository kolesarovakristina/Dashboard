import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  TextWrapper,
  ButtonWrapper,
  StyledButton,
  Content
} from "./styles";

const ConfirmWindow = ({ text, yes, no, dark, onClick }) => (
  <Wrapper dark={dark}>
    <TextWrapper>
      <Content dark={dark}>{text}</Content>
    </TextWrapper>
    <ButtonWrapper>
      <StyledButton dark={dark} bgColor value onClick={onClick}>
        {yes}
      </StyledButton>
      <StyledButton dark={dark} value={false} onClick={onClick}>
        {no}
      </StyledButton>
    </ButtonWrapper>
  </Wrapper>
);

ConfirmWindow.propTypes = {
  text: PropTypes.string.isRequired,
  yes: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ConfirmWindow;
