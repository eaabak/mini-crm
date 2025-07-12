import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { userFormSchema, type UserFormValues } from "../schema/userFormSchema";

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <label>İsim</label>
        <input {...register("name")} />
        {errors.name && <Error>{errors.name.message}</Error>}
      </Field>

      <Field>
        <label>E-posta</label>
        <input {...register("email")} type="email" />
        {errors.email && <Error>{errors.email.message}</Error>}
      </Field>

      <Field>
        <label>Şifre</label>
        <input {...register("password")} type="password" />
        {errors.password && <Error>{errors.password.message}</Error>}
      </Field>

      <Field>
        <label>Rol</label>
        <select {...register("role")}>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
      </Field>

      <Field>
        <label>
          <input type="checkbox" {...register("isActive")} />
          Aktif
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

  label {
    margin-bottom: 0.3rem;
  }

  input, select {
    padding: 0.6rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 0.8rem;
`;

const SubmitButton = styled.button`
  background: #28a745;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
`;
