import styled from "styled-components";

const Wrapper = styled.div`
    z-index: 10000;
    margin: auto;
    display: ${({ userManagment }) => (userManagment ? "none" : "flex")};
`;

export default Wrapper;
