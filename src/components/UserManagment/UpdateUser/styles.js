import styled from "styled-components";

const StyledTitle = styled.div`
    font-size: 1.3em;
    letter-spacing: .75px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.bgNavbar : ({ theme }) => theme.neutralColor.orange)};
    border-bottom: 1px solid ${({ dark }) => (dark ? ({ theme }) => theme.darkColor.bgNavbar : ({ theme }) => theme.neutralColor.white)};
    padding-bottom: 5px;
    margin: .5em;
    align-items: center;
    display: flex;
`;

export default StyledTitle;
