import styled from "styled-components";

export const InputWrapper = styled.div`
  padding: 10px 10px 0 10px;
  display: flex;
`;

export const ButtonWrapper = styled.div`
  padding: 0 10px;
`;

export const StyledForm = styled.form`
  max-width: 400px;
  padding: 1em;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.bgNavbar};
`;

export const LogoWrapper = styled.div`
  width: 100%;
  padding: 0.5em;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  color: ${({ dark }) =>
    dark === false
      ? ({ theme }) => theme.neutralColor.white
      : ({ theme }) => theme.darkColor.darkerGrey};
  padding: 0 0.5em;
  font-size: 18px;
  line-height: 23px;
  width: 100%;
  text-align: right;
`;

export const Description = styled.div`
  color: rgba(255, 87, 26, 1);
  padding: 0.75em 0.5em;
  font-size: 14px;
  letter-spacing: 0.5px;
  width: 100%;
  line-height: 18px;
`;
