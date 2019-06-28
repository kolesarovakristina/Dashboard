import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${({ dark }) => (dark ? ({ theme }) => theme.neutralColor.white : ({ theme }) => theme.darkColor.bgNavbar)};
  `;

export const Loading = styled.img`
  max-width: 10%;
  margin: auto;
  display: flex;
  align-self: center;
  @media (max-width: 840px){
    max-width: 40%;
  }
`;
