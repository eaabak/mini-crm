import styled from "styled-components";

const Label = styled.span<{ hasError?: boolean }>`
  font-weight: 600;
  color: ${({ hasError, theme }) =>
    hasError ? "#dc2626" : theme.colors.textPrimary};
  margin-right: 0.3rem;
`;

export default Label;
