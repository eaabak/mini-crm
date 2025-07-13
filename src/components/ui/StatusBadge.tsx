import styled from "styled-components";

const StatusBadge = styled.span<{ active: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.colors.success : theme.colors.textSecondary};
  color: white;
  padding: 0.3rem 0.7rem;
  font-size: 0.8rem;
  border-radius: 4px;
  font-weight: 500;
`;

export default StatusBadge;
