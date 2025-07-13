import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default PageWrapper;