import styled from "styled-components";

export const LogoWrapper = styled.div`
  height: 100px;
  transition: all 0.2s linear;
  display: flex;
  justify-content: center;
  @media (max-width: 840px) {
    height: 70px;
  }
`;

export const Logo = styled.img`
  max-width: auto;
  max-height:${({ loginLogo }) => (loginLogo ? "70px" : "40px")};
  min-height: 25px;
  display: flex;
  margin: auto;
  padding: 0 .75em;
`;
