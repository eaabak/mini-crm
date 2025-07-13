import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../features/users/components/ui";

export default function AppLayout() {
  return (
    <Wrapper>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 1rem 1rem;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
