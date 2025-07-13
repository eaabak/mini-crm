import styled from "styled-components";

 const Modal = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export default Modal;