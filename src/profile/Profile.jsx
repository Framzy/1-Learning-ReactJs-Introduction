import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
  const profile = useContext(ProfileContext);
  return (
    <div>
      <h2>Profile</h2>
      <p>Nama {profile.name}</p>
    </div>
  );
}
