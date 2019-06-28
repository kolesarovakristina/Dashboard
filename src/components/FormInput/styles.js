import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  //   @media (max-width: 840px) {
  //     width: 90%;
  //     position: relative;
  //     padding: 0;
  //   }
  margin: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  transition: all 0.2s linear;
  width: 100%;
  display: inline-block;
  height: 40px;
  font-size: 15px;
  border: 0;
  outline: none;
  display: block;
  border-top-right-radius: ${({ isLogin }) => (isLogin ? "5px" : 0)};
  border-bottom-right-radius: ${({ isLogin }) => (isLogin ? "5px" : 0)};
  text-indent: 10px;
  color: ${({ dark }) => (dark ? "rgb(80,80,80)" : "rgb(255,255,255)")};
  background: ${({ dark }) => (dark ? "rgb(230,230,230)" : "rgb(80,80,80)")};
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.neutralColor.orange};
  }
`;

export const StyledText = styled.div`
  text-align: center;
  width: calc(100%);
  padding-bottom: 10px;
`;

export const Title = styled.div`
  font-style: italic;
  color: ${({ dark }) =>
    dark === false
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.darkerGrey};
  font-size: 19px;
`;
export const StyledButtonWrapper = styled.div`
  padding-top: 20px;
`;

export const Button = styled.button`
    transition: all 0.2s linear;
    width: calc(100%);
    height: 45px;
    font-size: 14px;
    background-color:rgb(255, 87, 26);
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    border: 0
    border:none;
    outline: none;
    display: block;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: none;
        border: 1.5px solid rgb(255, 87, 26);
        color: rgb(255, 87, 26);
    }
`;

export const InputWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  padding-top: 10px;
`;

export const IconWrapper = styled.span`
  display: inline-block;
  float: left;
  line-height: 50px;
  text-align: center;
  background: rgb(64, 64, 64);
  width: 40px;
  height: 40px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
export const ForgotPasswordWrapper = styled(Link)``;
