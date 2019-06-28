import styled from "styled-components";

export const Navigation = styled.nav`
  @media (max-width: 840px) {
    left: ${({ isHidden }) => (isHidden ? "-110%" : 0)};
    width: 45%;
    z-index: 100000;
    border-right: 0;
    transition: all 0.2s linear;
    height: calc(100% - 70px);
    box-shadow: 0 6px 7px 0 ${({ dark }) => (dark ? "darkgrey" : "black")};
  }
  @media (max-width: 600px) {
    left: ${({ isHidden }) => (isHidden ? "-110%" : 0)};
    width: 70%;
    height: calc(100% - 70px);
    box-shadow: 0 6px 7px 0 ${({ dark }) => (dark ? "darkgrey" : "black")};
  }
  @media (max-width: 450px) {
    left: ${({ isHidden }) => (isHidden ? "-110%" : 0)};
    width: 100%;
    height: calc(100% - 70px);
    box-shadow: 0 6px 7px 0 ${({ dark }) => (dark ? "darkgrey" : "black")};
  }
  width: 20%;
  background: ${({ dark }) =>
    dark
      ? ({ theme }) => theme.lightColor.bgNavbar
      : ({ theme }) => theme.darkColor.bgNavbar};
  height: 100vh;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s linear;
  box-shadow: 0 0 7px 0 ${({ dark }) => (dark ? "darkgrey" : "black")};
`;

export const MenuContent = styled.div`
  transition: all 0.2s linear;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ItemsWrapper = styled.div`
  position: relative;
  padding: 1.5em;
  padding-top: 0;
`;

export const TogglerWrapper = styled.div`
  align-self: flex-end;
  transition: all 0.2s linear;
  width: 100%;
  padding: 2em 0 0;
  display: flex;
  justify-content: center;
`;

export const UserWrapper = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.dark
      ? props.theme.darkColor.darkerGrey
      : props.theme.neutralColor.white};
`;

export const LogoutButton = styled.button`
  margin-left: 10px;
  background-color: ${({ theme }) => theme.neutralColor.orange};
  border: none;
  border-radius: 3px;
  color: ${({ theme }) => theme.neutralColor.white};
`;

export const WrapperLogout = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
