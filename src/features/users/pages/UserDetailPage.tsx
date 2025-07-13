import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { useUserStore } from "../store";
import { Card, Field, Label, Message, Title } from "../components/ui";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function UserDetailPage() {
  const { id } = useParams();
  const users = useUserStore((s) => s.users);
  const user = users.find((u) => u.id === id);

  if (!user) return <Message>Kullanıcı bulunamadı.</Message>;

  return (
    <Wrapper>
      <Card>
        <Title>{user.name}</Title>
        <Field>
          <Label>E-posta:</Label> {user.email}
        </Field>
        <Field>
          <Label>Rol:</Label> {user.role}
        </Field>
        <Field>
          <Label>Durum:</Label>{" "}
          <Status $active={user.isActive}>
            {user.isActive ? "Aktif" : "Pasif"}
          </Status>
        </Field>
        <Field>
          <Label>Oluşturulma:</Label>{" "}
          {new Date(user.createdAt).toLocaleDateString("tr-TR")}
        </Field>
      </Card>

      <MapWrapper>
        <MapContainer
          center={[user.latitude, user.longitude]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <Marker position={[user.latitude, user.longitude]} />
        </MapContainer>
      </MapWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MapWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  height: 400px;
  min-height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
`;

const Status = styled.span<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? "#28a745" : "#dc3545")};
  font-weight: 600;
`;