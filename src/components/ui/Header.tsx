import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import LogoIcon from "../../../../assets/miniCRM.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <Left>
        <HomeLink to="/">
          <LogoWrapper>
            <img src={LogoIcon} alt="MiniCRM Logo" />
          </LogoWrapper>
        </HomeLink>
      </Left>

      <Right>
        <ToggleWrapper>
          <a
            href="https://github.com/eaabak/mini-crm"
            target="_blank"
            rel="noopener noreferrer"
            title="mini-crm GitHub Repo"
          >
            <IconWrapper>
              <FaGithub size={18} />
            </IconWrapper>
          </a>

          <a
            href="https://github.com/eaabak"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profili"
          >
            <ProfileWrapper>
              <ProfileImage
                src="https://avatars.githubusercontent.com/u/9548700?v=4"
                alt="GitHub Profile"
              />
            </ProfileWrapper>
          </a>
        </ToggleWrapper>
      </Right>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background: #0b2b51;
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

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: auto;
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ToggleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  background: rgba(75, 107, 145, 0.7);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
`;

const ProfileWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #3ba936;
  transition: border 0.2s ease-in-out;

  &:hover {
    border-width: 2px;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  transition: background 0.2s ease-in-out;

  &:hover {
    border: 1px solid #3ba936;
  }
`;
