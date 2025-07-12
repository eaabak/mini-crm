import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

interface Props {
  users: User[];
}

export default function UserTableView({ users }: Props) {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>İsim</th>
            <th>E-posta</th>
            <th>Rol</th>
            <th>Durum</th>
            <th>Oluşturulma</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <Badge $type="role">{u.role}</Badge>
              </td>
              <td>
                <Badge $type={u.isActive ? "active" : "inactive"}>
                  {u.isActive ? "Aktif" : "Pasif"}
                </Badge>
              </td>
              <td>{new Date(u.createdAt).toLocaleDateString("tr-TR")}</td>
              <td>
                <DetailLink to={`/users/${u.id}`}>
                  Detay <FaArrowRight size={12} />
                </DetailLink>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
}

const TableWrapper = styled.div`
  max-height: 800px;
  overflow-y: auto;
  overflow-x: auto;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0 0 0 1px #e5e7eb;
  background: white;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;


const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  min-width: 760px;
  table-layout: fixed;

  thead {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  th {
    background: #f3f4f6;
    padding: 1rem;
    font-weight: 600;
    color: #374151;
    text-align: left;
    box-shadow: inset 0 -1px 0 #e5e7eb, 0 2px 4px rgba(0, 0, 0, 0.03);
  }

  td {
    padding: 1rem;
    border-top: 1px solid #f1f5f9;
    color: #334155;
    background: white;
  }

  tr:hover td {
    background: #f9fbfc;
  }
`;

const Badge = styled.span<{ $type: "active" | "inactive" | "role" }>`
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 999px;
  background-color: ${({ $type }) =>
    $type === "active"
      ? "#dcfce7"
      : $type === "inactive"
      ? "#fee2e2"
      : "#e0f2fe"};
  color: ${({ $type }) =>
    $type === "active"
      ? "#166534"
      : $type === "inactive"
      ? "#991b1b"
      : "#0369a1"};
`;

const DetailLink = styled(Link)`
  background: #2563eb;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #1e40af;
  }
`;
