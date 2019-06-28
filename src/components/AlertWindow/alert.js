import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  TextWrapper,
  ButtonWrapper,
  StyledButton,
  Content
} from "Components/ConfirmWindow/styles";

const AlertWindow = ({ text, confirm, dark, onClick, alertButton }) => (
  <Wrapper dark={dark}>
    <TextWrapper>
      <Content dark={dark}>{text}</Content>
    </TextWrapper>
    <ButtonWrapper>
      <StyledButton
        dark={dark}
        bgColor
        onClick={onClick}
        alertButton={alertButton}
      >
        {confirm}
      </StyledButton>
    </ButtonWrapper>
  </Wrapper>
);

AlertWindow.propTypes = {
  text: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  dark: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  alertButton: PropTypes.bool.isRequired
};

export default AlertWindow;
