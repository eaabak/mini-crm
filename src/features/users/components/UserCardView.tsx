import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatDate, type User } from "../types";

interface Props {
  users: User[];
}

export default function UserCardView({ users }: Props) {
  return (
    <Grid>
      {users.map((user) => (
        <Card key={user.id}>
          <HeaderSection>
            <Name>{user.name}</Name>
            <Status $active={user.isActive}>
              {user.isActive ? "Aktif" : "Pasif"}
            </Status>
          </HeaderSection>
          <Details>
            <Label>E-posta:</Label>
            <Email>{user.email}</Email>
            <Label>Rol:</Label>
            <Role>{user.role}</Role>
            <Label>Oluşturulma:</Label>
            <Date>{formatDate(user.createdAt)}</Date>
          </Details>
          <StyledLink to={`/users/${user.id}`}>Detay Gör</StyledLink>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
`;

const Status = styled.span<{ $active: boolean }>`
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  background: ${({ $active }) => ($active ? "#dcfce7" : "#fee2e2")};
  color: ${({ $active }) => ($active ? "#065f46" : "#991b1b")};
  font-weight: 600;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: #374151;
`;

const Label = styled.span`
  font-weight: 600;
  color: #6b7280;
`;

const Email = styled.p`
  margin-bottom: 0.3rem;
`;

const Role = styled.span`
  text-transform: capitalize;
`;

const Date = styled.small`
  color: #9ca3af;
`;

const StyledLink = styled(Link)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: #ffffff;
  border-radius: 8px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #1e40af;
  }
`;
