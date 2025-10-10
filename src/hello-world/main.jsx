import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/searchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Click Me" message="Success Click" />
      <MyButton text="Smash Me" onSmash={() => alert("Success Smash")} />
      <MyButton
        text="Smash Me Again"
        onSmash={() => alert("Success Smash Again")}
      />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Success Click");
        }}
      />
      <SearchForm />
      <SayHelloForm />
      <Counter />
      <Counter />
    </Container>
  </StrictMode>
);
