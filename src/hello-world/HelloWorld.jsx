function HelloWorld() {
  const props = {
    text: "Hello, World!",
    p: "Welcome to React JS",
  };

  return (
    <div>
      <HeaderHelloWorld {...props} />
      <FirstParagraphHelloWorld {...props} />
      <SecondParagraphHelloWorld text="This how to use props" />
    </div>
  );
}

function HeaderHelloWorld({ text = "Ups, Forget to add text" }) {
  return (
    <h1 style={{ color: "#b9b7b7ff", backgroundColor: "black" }}>
      {text.toUpperCase()}
    </h1>
  );
}

function Paragrafh(p) {
  const style = {
    color: "#bfbfbfff",
    backgroundColor: "black",
  };
  return <p style={style}>{p}</p>;
}

function FirstParagraphHelloWorld({ p = "Ups, Forget to add text" }) {
  return <h3>{Paragrafh(p)}</h3>;
}

function SecondParagraphHelloWorld({ text = "Ups, Forget to add text" }) {
  return (
    <p style={{ color: "#b9b7b7ff", backgroundColor: "black" }}>
      {text.toLowerCase()}
    </p>
  );
}

export default HelloWorld;
