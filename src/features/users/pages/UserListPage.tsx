import { useSearchParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import styled from "styled-components";

import { useUserStore } from "../stores/useUserStore";
import UserCardView from "../components/UserCardView";
import UserTableView from "../components/UserTableView";
import Pagination from "../components/ui/Pagination";
import UserListActions from "../components/UserListActions";
import { FaUserSlash } from "react-icons/fa";
import React from "react";
const USERS_PER_PAGE = 20;

export default function UserListPage() {
  const users = useUserStore((s) => s.users);
  const [viewMode, setViewMode] = useState<"table" | "card">("table");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchText = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setViewMode("card");
      }
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredUsers = useMemo(() => {
    const term = searchText.toLowerCase();
    return users.filter((user) =>
      [user.name, user.email, user.role].some((field) =>
        field.toLowerCase().includes(term)
      )
    );
  }, [users, searchText]);

  const totalFiltered = filteredUsers.length;
  const totalPages = Math.ceil(totalFiltered / USERS_PER_PAGE);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * USERS_PER_PAGE;
    return filteredUsers.slice(start, start + USERS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  const changePage = (page: number) => {
    const params: Record<string, string> = {
      ...(searchText && { search: searchText }),
      page: String(page),
    };
    setSearchParams(params);
  };

  return (
    <>
      <TopActionsBar>
        <UserListActions
          onAddUser={() => navigate("/add-user")}
          searchValue={searchText}
          onSearchChange={(val) => {
            const newParams: Record<string, string> = val
              ? { search: val, page: "1" }
              : {};
            setSearchParams(newParams);
          }}
          viewMode={viewMode}
          onToggleView={setViewMode}
        />
      </TopActionsBar>

      <ContentArea>
        {filteredUsers.length === 0 ? (
          <NoResults>
            <FaUserSlash />
            <h2>Sonuç Bulunamadı</h2>
            <p>
              {searchText
                ? `"${searchText}" aramasına ait hiçbir kullanıcı bulunamadı.`
                : "Hiç kullanıcı eklenmemiş."}
            </p>
          </NoResults>
        ) : viewMode === "table" ? (
          <>
            <UserTableView users={paginatedUsers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalFiltered}
              onPageChange={changePage}
              variant="table"
            />
          </>
        ) : (
          <>
            <UserCardView users={paginatedUsers} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalFiltered}
              onPageChange={changePage}
              variant="card"
            />
          </>
        )}
      </ContentArea>
    </>
  );
}
const ContentArea = styled.div`
  margin-top: 1.5rem;
  max-height: 1024px;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    max-height: none;
    padding: 0.5rem;
  }
`;

const TopActionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const NoResults = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  color: #6b7280;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 0 1px #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    color: #9ca3af;
    font-size: 3rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: #6b7280;
    margin: 0;
  }
`;
