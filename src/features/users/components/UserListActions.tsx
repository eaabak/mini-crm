import styled from "styled-components";
import { FaSearch, FaPlus, FaThLarge, FaList, FaTimes } from "react-icons/fa";

interface Props {
  onAddUser: () => void;
  onSearchChange: (value: string) => void;
  searchValue: string;
  viewMode: "table" | "card";
  onToggleView: (mode: "table" | "card") => void;
}

export default function UserListActions({
  onAddUser,
  onSearchChange,
  searchValue,
  viewMode,
  onToggleView,
}: Props) {
  return (
    <Wrapper>
      <Left>
        <SearchWrapper>
          <FaSearch />
          <Input
            type="text"
            placeholder="Search by name, email or role"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchValue && (
            <ClearButton
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
            >
              <FaTimes />
            </ClearButton>
          )}
        </SearchWrapper>
      </Left>

      <Right>
        <ToggleWrapper>
          <IconToggle
            $active={viewMode === "card"}
            onClick={() => onToggleView("card")}
          >
            <FaThLarge />
          </IconToggle>
          <IconToggle
            $active={viewMode === "table"}
            onClick={() => onToggleView("table")}
          >
            <FaList />
          </IconToggle>
        </ToggleWrapper>

        <AddButton onClick={onAddUser}>
          <FaPlus size={12} />
          <span>Add User</span>
        </AddButton>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 0.3rem 0.5rem;
  gap: 0.5rem;
  min-width: 320px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  svg {
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: white;
  font-size: 0.875rem;
  flex: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  color: #111827;
  width: 25rem;

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #6b7280;
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  background: rgb(233, 234, 237);
  padding: 0.3rem;
  border-radius: 6px;
`;

const IconToggle = styled.button<{ $active?: boolean }>`
  background: ${({ $active }) => ($active ? "#3ba936" : "transparent")};
  color: ${({ $active }) => ($active ? "#fff" : "#6b7280")};
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  outline: none;

  &:hover {
    background: ${({ $active }) => ($active ? "#3ba936" : "#e5e7eb")};
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

const AddButton = styled.button`
  background: #3ba936;
  color: #ffffff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: rgb(120, 186, 116);
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;
