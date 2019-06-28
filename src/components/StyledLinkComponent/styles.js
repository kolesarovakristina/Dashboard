import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLinkComponent = styled(NavLink)`
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    height: 60px;
    line-height: 60px;
    width: 100%;
    color: ${({ dark }) => (dark === "true" ? ({ theme }) => theme.darkColor.bgNavbar : ({ theme }) => theme.neutralColor.white)};
    background: ${({ dark }) => (dark === "true" ? "rgb(230,230,230)" : "rgb(80,80,80)")};
    font-size: 1.15em;
    justify-content: center;
    align-items: center;
    transition: all 0.2s linear;
    font-weight: 600;
    border-right: 1px solid ${({ dark }) => (dark === "true" ? ({ theme }) => theme.neutralColor.white : ({ theme }) => theme.darkColor.bgNavbar)};
    @media (max-width: 840px) {
        height: 45px;
        line-height: 45px;
    }
    &:last-child{
        border-right: 0;
    }
    &:hover {
        text-decoration: none;
        color: ${({ dark }) => (dark === "true" ? "rgb(180,180,180)" : "rgb(120,120,120)")};
    }
    &:focus {
        text-decoration: none;
        color: ${({ dark }) => (dark === "true" ? ({ theme }) => theme.darkColor.darkGrey : ({ theme }) => theme.neutralColor.white)};
    }
`;

export const Title = styled.div`
    @media (max-width: 840px) {
        display: ${({ isIcon }) => (isIcon ? "none" : "flex")};
    }
`;
