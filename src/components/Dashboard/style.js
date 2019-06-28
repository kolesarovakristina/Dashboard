import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 840px) {
    width: 100%;
    padding-top: ${({ isToken }) => (isToken === -1 ? 0 : "94px")};
    display: ${({ isToken }) => (isToken === -1 ? "flex" : "block")};
    position: relative;
  }
  justify-content: center;
  align-items: center;
  display: ${({ isToken }) => (isToken === -1 ? "flex" : "block")};
  width: ${({ isToken }) => (isToken === -1 ? "100%" : "80%")};
  padding: 1.5em;
  min-height: 100%;
  transition: all 0.2s linear;
  background: ${({ dark }) => (dark ? "#ECF0F5" : "#191919")};
`;

export const DashboardWrapper = styled.div`
  @media (max-width: 840px) {
    display: block;
  }
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background: ${({ dark }) => (dark ? "#ECF0F5" : "#191919")};
`;

export const ContentWrapper = styled.div`
  box-shadow: ${({ isToken }) =>
    isToken !== -1
      ? ({ dark }) => (dark ? "0 0 7px 0 darkgrey" : "0 0 7px 0 black")
      : 0};
`;
