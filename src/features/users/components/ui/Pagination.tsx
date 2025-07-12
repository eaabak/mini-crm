import styled from "styled-components";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const goToFirst = () => onPageChange(1);
  const goToLast = () => onPageChange(totalPages);
  const goToPrev = () => onPageChange(currentPage - 1);
  const goToNext = () => onPageChange(currentPage + 1);

  return (
    <PaginationWrapper>
      <Info>{`${(currentPage - 1) * 20 + 1} - ${Math.min(
        currentPage * 20,
        totalPages * 20
      )} of ${totalPages * 20}`}</Info>

      <Controls>
        <IconButton disabled={currentPage === 1} onClick={goToFirst}>
          <FaAnglesLeft />
        </IconButton>
        <IconButton disabled={currentPage === 1} onClick={goToPrev}>
          <FaAngleLeft />
        </IconButton>
        <IconButton disabled={currentPage === totalPages} onClick={goToNext}>
          <FaAngleRight />
        </IconButton>
        <IconButton disabled={currentPage === totalPages} onClick={goToLast}>
          <FaAnglesRight />
        </IconButton>
      </Controls>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;
  background: white;
  border-radius: 0 0 12px 12px;

  font-size: 0.875rem;
  color: #374151;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Info = styled.div`
  font-weight: 500;
  color: #6b7280;
`;

const Controls = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const IconButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? "#f3f4f6" : "#2563eb")};
  color: ${({ disabled }) => (disabled ? "#9ca3af" : "#ffffff")};
  border: none;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#f3f4f6" : "#1e40af")};
  }
`;
