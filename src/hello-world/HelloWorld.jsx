function HelloWorld() {
  return (
    <div>
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld() {
  return <h1>Hello, World!</h1>;
}

function ParagraphHelloWorld() {
  return <p>Welcome to React</p>;
}

export default HelloWorld;
