import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1em;
  background-color: ${({ dark }) =>
    dark ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .1)"};
  z-index: 99999;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.2s linear;
`;

export const Modal = styled.div`
  width: 100%;
`;

export const ModalButton = styled.span`
  display: inline-block;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  background: none;
`;
