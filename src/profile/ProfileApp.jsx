import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

export default function ProfileApp() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <ProfileContext.Provider value={{ name, address }}>
      <h1>Profile App</h1>
      <ProfileForm
        name={name}
        setName={setName}
        address={address}
        setAddress={setAddress}
      />
      <Profile />
      <ProfileAddress />
    </ProfileContext.Provider>
  );
}
