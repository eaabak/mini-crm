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
    <ResponsiveWrapper>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>İsim</th>
              <th>E-posta</th>
              <th>Rol</th>
              <th>Durum</th>
              <th>Oluşturulma</th>
              <th>Detay</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>
                  <Email>{u.email}</Email>
                </td>
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
    </ResponsiveWrapper>
  );
}

const ResponsiveWrapper = styled.div`
  width: 100%;
  background: white;

  @media (max-width: 768px) {
    border-radius: 12px;
    box-shadow: 0 0 0 1px #e5e7eb;
  }
`;

const TableWrapper = styled.div`
  max-height: 800px;
  overflow-y: auto;
  overflow-x: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    max-height: none;
    border-radius: 12px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    margin: 0 -1rem;
    padding: 0 1rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  font-size: 0.95rem;
  table-layout: fixed;
  border-radius: 12px;
  overflow: hidden;

  thead {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  th {
    background: #0b2b51;
    padding: 1rem;
    font-weight: 600;
    color: white;
    text-align: left;
    box-shadow: inset 0 -1px 0 #e5e7eb, 0 2px 4px rgba(0, 0, 0, 0.03);
  }

  /* Sol üst ve sağ üst hücreye radius */
  th:first-child {
    border-top-left-radius: 12px;
  }

  th:last-child {
    border-top-right-radius: 12px;
  }

  td {
    padding: 1rem;
    border-top: 1px solid #f1f5f9;
    color: #334155;
    background: white;
    word-break: break-word;

    &:nth-child(2) {
      max-width: 160px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
  white-space: nowrap;
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
  background: #3ba936;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: rgb(120, 186, 116);
  }
`;

const Email = styled.div`
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    max-width: 100px;
  }
`;
