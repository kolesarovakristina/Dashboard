import styled from "styled-components";

export const Error = styled.span`
    color:#ff0000;
    font-size:15px;
`;
export const ErrorWrapper = styled.div`
    display: ${({ visibility }) => (visibility ? "block" : "none")}
    text-align: center;
`;
