import styled from "styled-components";

const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-right: 0.3rem;
`;

export default Label;