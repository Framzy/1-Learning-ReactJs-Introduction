export default function GuestBookForm({ name, setName, ref }) {
  return (
    <>
      {" "}
      <label htmlFor="name">Name</label>
      <br />
      <input
        ref={ref}
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
    </>
  );
}
