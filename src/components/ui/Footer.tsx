import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  text-align: center;
  border-top: 1px solid #e5e7eb;
  margin-top: auto;
`;

export default Footer;