import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

import { useUserStore } from "../stores/useUserStore";
import type { UserFormValues } from "../schema/userFormSchema";
import UserForm from "./UserForm";
import { Modal, Overlay } from "./ui";


export default function AddUserModal() {
  const navigate = useNavigate();
  const addUser = useUserStore((s) => s.addUser);

  const handleSubmit = (data: UserFormValues) => {
    const newUser = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      isActive: data.isActive,
      createdAt: new Date().toISOString(),
      latitude: parseFloat(faker.location.latitude().toString()),
      longitude: parseFloat(faker.location.longitude().toString()),
    };

    addUser(newUser);
    navigate("/");
  };

  return (
    <Overlay onClick={() => navigate("/")}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>Yeni Kullanıcı</h2>
        <UserForm onSubmit={handleSubmit} />
      </Modal>
    </Overlay>
  );
}