import styled from "styled-components";

export const UserWrapper = styled.div`
  min-width: 100%;
  overflow: hidden;
  z-index: 100;
  height: 70px;
  display: flex;
  align-items: center;
  background: ${({ dark }) => (dark ? "#eee" : "#1e1e1e")};
  color: ${props =>
    props.dark === true
      ? props.theme.darkColor.darkerGrey
      : props.theme.neutralColor.white};
  position: relative;
  z-index: 1;
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.neutralColor.orange};
  border: none;
  color: ${({ theme }) => theme.neutralColor.white};
  padding: 0 0.5em;
  height: 40px;
  bottom: ${({ logout }) => (logout ? "70px" : "31px")};
  position: absolute;
  cursor: pointer;
  min-width: 100%;
  font-weight: bold;
  letter-spacing: 0.5px;
  font-size: 1.05em;
  transition: all 0.2s ease-in-out;
`;

export const WrapperLogout = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  z-index: 10000000000000000000000;
`;

export const User = styled.span`
  padding: 0 1em;
  font-size: 1.05em;
  text-transform: uppercase;
  font-weight: bold;
`;
