import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FiUserX } from "react-icons/fi";

import CustomMarker from "../components/CustomMarker";
import markerIcon from "../../../assets/markerIcon.svg";
import { useSelectedUserStore } from "../stores/useSelectedUserStore";

export default function UserDetailPage() {
  const navigate = useNavigate();
  const { user } = useSelectedUserStore();

  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  if (!user) {
    return (
      <CenteredWrapper>
        <NotFoundCard>
          <FiUserX size={48} color="#ef4444" />
          <h2>Kullanıcı Bulunamadı</h2>
          <p>Aradığınız kullanıcı silinmiş ya da hiç eklenmemiş olabilir.</p>
          <BackButton onClick={() => navigate("/")}>Ana Sayfaya Dön</BackButton>
        </NotFoundCard>
      </CenteredWrapper>
    );
  }

  return (
    <FullScreenMapWrapper>
      <MapContainer
        center={[user.latitude, user.longitude]}
        zoom={5}
        scrollWheelZoom
        style={{ width: "100%", height: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        <CustomMarker user={user} icon={customIcon} />
      </MapContainer>
    </FullScreenMapWrapper>
  );
}

const FullScreenMapWrapper = styled.div`
  width: 100%;
  height: 80vh;
`;

const CenteredWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const NotFoundCard = styled.div`
  padding: 3rem 2.5rem;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  p {
    font-size: 0.95rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  svg {
    margin-bottom: 0.5rem;
  }
`;

const BackButton = styled.button`
  background-color: #3ba936;
  color: white;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: rgb(120, 186, 116);
  }
`;
