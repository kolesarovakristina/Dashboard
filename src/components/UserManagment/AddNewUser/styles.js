import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${({ dark }) => (dark ? "black" : "white")};
    padding: .5em;
`;

export const Title = styled.div`
    padding-bottom: 2px;
`;

export const InputWrapper = styled.div`
    padding: .5em;
`;

export const StyledForm = styled.form`
    max-width: 400px;
    margin: auto;
    padding: .5em 0 1em;
`;
