import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.label`
    display: block;
    margin-bottom: 2px;
`;

export const StyledSelect = styled.select`
    display: block;
    height: 40px;
    width: 100%;
    font-size: 15px;
    background-color: #fff;
    border:0;
    outline: none;
    display: block;
    border-top-right-radius: ${({ isLogin }) => (isLogin ? "5px" : 0)};
    border-bottom-right-radius: ${({ isLogin }) => (isLogin ? "5px" : 0)};
    text-indent: 10px;
    color: ${({ dark }) => (dark ? "rgb(80,80,80)" : "rgb(255,255,255)")};
    background: ${({ dark }) => (dark ? "rgb(230,230,230)" : "rgb(80,80,80)")};
    outline: none;
`;

export const StyledOption = styled.option`
    display: block;
    width: 100%;
    height: 30px;
`;
