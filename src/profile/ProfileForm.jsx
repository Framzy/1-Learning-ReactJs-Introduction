export default function ProfileForm({ name, setName, address, setAddress }) {
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAddress(e) {
    setAddress(e.target.value);
  }

  return (
    <>
      <h2>Profile Form</h2>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={handleChangeName} />
      <label htmlFor="address">Address</label>
      <input type="text" value={address} onChange={handleChangeAddress} />
    </>
  );
}
