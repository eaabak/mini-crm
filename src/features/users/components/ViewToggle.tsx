import styled from "styled-components";
import { MdViewList, MdViewModule } from "react-icons/md";

interface Props {
  mode: "table" | "card";
  onChange: (mode: "table" | "card") => void;
}

export default function ViewToggle({ mode, onChange }: Props) {
  return (
    <ToggleWrapper>
      <ToggleButton
        $active={mode === "table"}
        onClick={() => onChange("table")}
        title="Tablo Görünüm"
      >
        <MdViewList size={20} />
      </ToggleButton>
      <ToggleButton
        $active={mode === "card"}
        onClick={() => onChange("card")}
        title="Kart Görünüm"
      >
        <MdViewModule size={20} />
      </ToggleButton>
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#007bff" : "#e0e0e0")};
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
`;
