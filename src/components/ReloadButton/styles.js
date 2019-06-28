import styled from "styled-components";

export const Wrapper = styled.div`
 display: ${({ isAdmin }) => (isAdmin ? "inline-block" : "none")};
 `;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.neutralColor.orange};
  border: none;
  border-radius: 3px;
  color:${({ theme }) => theme.neutralColor.white};
  outline: none;
`;
