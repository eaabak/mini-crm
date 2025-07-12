import styled from "styled-components";

const Message = styled.div`
  padding: 2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default Message;