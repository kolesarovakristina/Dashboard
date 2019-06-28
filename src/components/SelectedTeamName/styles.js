import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-block;
`;
export const Name = styled.span`
    color:${({ dark }) => (dark === false ? ({ theme }) => theme.neutralColor.white : ({ theme }) => theme.darkColor.darkerGrey)};
    font-size: 20px;
`;
