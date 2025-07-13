import { Routes, Route } from "react-router-dom";
import UserListPage from "../features/users/pages/UserListPage";
import UserDetailPage from "../features/users/pages/UserDetailPage";
import AddUserModal from "../features/users/components/AddUserModal";
import AppLayout from "../layouts/AppLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
      </Route>
      <Route path="/add-user" element={<AddUserModal />} />
    </Routes>
  );
}
