import Row from "./Row.jsx";

export default function Table() {
  const data = [
    { id: 1, text: "Satu" },
    { id: 2, text: "Dua" },
    { id: 3, text: "Tiga" },
  ];
  return (
    <table border="1">
      <tbody>
        {data.map((row) => (
          <Row key={row.id} {...row} />
        ))}
      </tbody>
    </table>
  );
}
