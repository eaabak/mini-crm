import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled, { css } from "styled-components";
import { userFormSchema, type UserFormValues } from "../schema/userFormSchema";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props {
  onSubmit: (data: UserFormValues) => void;
}

export default function UserForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
  });
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label hasError={!!errors.name}>İsim</Label>
        <Input {...register("name")} $hasError={!!errors.name} />
        {errors.name && <Error>{errors.name.message}</Error>}
      </Field>

      <Field>
        <Label hasError={!!errors.email}>E-posta</Label>
        <Input type="email" {...register("email")} $hasError={!!errors.email} />
        {errors.email && <Error>{errors.email.message}</Error>}
      </Field>

      <Field>
        <Label hasError={!!errors.password}>Şifre</Label>
        <PasswordWrapper $hasError={!!errors.password}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
          <EyeIcon type="button" onClick={() => setShowPassword((v) => !v)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </PasswordWrapper>
        {errors.password && <Error>{errors.password.message}</Error>}
      </Field>

      <Field>
        <Label>Rol</Label>
        <Select {...register("role")} $hasError={!!errors.role}>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </Select>
      </Field>

      <Field>
        <label>
          <input type="checkbox" {...register("isActive")} /> Aktif
        </label>
      </Field>

      <SubmitButton type="submit">Kullanıcı Oluştur</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ hasError?: boolean }>`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: ${({ hasError }) => (hasError ? "#dc2626" : "#111827")};
`;

const sharedInputStyles = css<{ $hasError?: boolean }>`
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid ${({ $hasError }) => ($hasError ? "#dc2626" : "#ccc")};
  outline: none;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#dc2626" : "#4f46e5")};
    box-shadow: ${({ $hasError }) =>
      $hasError ? "0 0 0 1px #dc2626" : "0 0 0 2px rgba(99, 102, 241, 0.3)"};
  }
`;

const Input = styled.input<{ $hasError?: boolean }>`
  ${sharedInputStyles}
`;

const Select = styled.select<{ $hasError?: boolean }>`
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid ${({ $hasError }) => ($hasError ? "#dc2626" : "#ccc")};
  outline: none;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? "#dc2626" : "#4f46e5")};
    box-shadow: ${({ $hasError }) =>
      $hasError ? "0 0 0 1px #dc2626" : "0 0 0 2px rgba(99, 102, 241, 0.3)"};
  }
`;

const Error = styled.span`
  color: #dc2626;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

const SubmitButton = styled.button`
  background: #3ba936;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #218838;
  }
`;

const PasswordWrapper = styled.div<{ $hasError: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 0.6rem 2.5rem 0.6rem 0.6rem;
    border-radius: 6px;
    border: 1px solid ${({ $hasError }) => ($hasError ? "#dc2626" : "#ccc")};

    &:focus {
      outline: none;
      border-color: ${({ $hasError }) => ($hasError ? "#dc2626" : "#4f46e5")};
      box-shadow: ${({ $hasError }) =>
        $hasError ? "0 0 0 1px #dc2626" : "0 0 0 2px rgba(99, 102, 241, 0.3)"};
    }
  }
`;

const EyeIcon = styled.button`
  position: absolute;
  right: 0.75rem;
  background: transparent;
  border: none;
  color: #6b7280;
  cursor: pointer;
  font-size: 1rem;
`;
