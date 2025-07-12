import styled from "styled-components";
export default function Header() {
  return (
    <Wrapper>
      <Left>
        <PageTitle>Kullancılar</PageTitle>
      </Left>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: #111827;
`;