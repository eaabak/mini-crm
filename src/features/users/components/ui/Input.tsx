// components/ui/InputWithClear.tsx
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const InputWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const StyledInput = styled.input`
  padding: 0.6rem 2.5rem 0.6rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.95rem;
  width: 100%;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #aaa;
  padding: 0;

  &:hover {
    color: #555;
  }
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Input({ value, onChange, placeholder }: Props) {
  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <ClearButton onClick={() => onChange("")}
          aria-label="Clear input"
        >
          <IoClose size={18} />
        </ClearButton>
      )}
    </InputWrapper>
  );
}
