import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  transition: background 0.3s;

  &:hover {
    background: #1e3a8a;
  }
`;

export default Button;
