import { useEffect, useRef } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L, { Marker as LeafletMarker } from "leaflet";
import styled from "styled-components";
import type { User } from "../types";

export default function CustomMarker({ user, icon }: { user: User; icon: L.Icon }) {
  const markerRef = useRef<LeafletMarker>(null);
  const map = useMap();

  useEffect(() => {
    if (markerRef.current) {
      map.setView([user.latitude, user.longitude], 5);
      markerRef.current.openPopup();
    }
  }, [map, user]);

  return (
    <Marker
      position={[user.latitude, user.longitude]}
      ref={markerRef}
      icon={icon}
    >
      <Popup autoPan={false}>
        <PopupContent>
          <strong>{user.name}</strong>
          <Detail>
            <Label>E-posta:</Label> {user.email}
          </Detail>
          <Detail>
            <Label>Rol:</Label> {user.role}
          </Detail>
          <Detail>
            <Label>Durum:</Label>{" "}
            <Status $active={user.isActive}>
              {user.isActive ? "Aktif" : "Pasif"}
            </Status>
          </Detail>
          <Detail>
            <Label>Oluşturulma:</Label>{" "}
            {new Date(user.createdAt).toLocaleDateString("tr-TR")}
          </Detail>
        </PopupContent>
      </Popup>
    </Marker>
  );
}

const PopupContent = styled.div`
  font-size: 0.85rem;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Label = styled.span`
  font-weight: 600;
  margin-right: 0.4rem;
`;

const Status = styled.span<{ $active: boolean }>`
  color: ${({ $active }) => ($active ? "#15803d" : "#b91c1c")};
  background: ${({ $active }) => ($active ? "#dcfce7" : "#fee2e2")};
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 6px;
`;
