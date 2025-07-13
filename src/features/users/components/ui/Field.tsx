import styled from "styled-components";

const Field = styled.div<{ hasError?: boolean }>`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.3rem;
    font-weight: 500;
    color: ${({ hasError }) => (hasError ? "#dc2626" : "#111827")};
  }

  input,
  select {
    padding: 0.6rem;
    border-radius: 6px;
    border: 1px solid ${({ hasError }) => (hasError ? "#dc2626" : "#ccc")};
    outline: none;

    &:focus {
      border-color: ${({ hasError }) => (hasError ? "#dc2626" : "#3b82f6")};
      box-shadow: 0 0 0 1px
        ${({ hasError }) => (hasError ? "#dc2626" : "#3b82f6")};
    }
  }
`;
export default Field;
