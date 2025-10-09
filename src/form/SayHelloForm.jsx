export default function SayHelloForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("inputName").value;
    document.getElementById("helloName").innerHTML = `Hello ${name}`;
  }

  return (
    <div>
      <form>
        <input type="text" id="inputName" placeholder="Enter your name..." />
        <button onClick={handleSubmit}>Say Hello</button>
      </form>
      <h3 id="helloName">Hello Unknown</h3>
    </div>
  );
}
