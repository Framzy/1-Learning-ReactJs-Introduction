# 1-Learning-ReactJs-Introduction

- React uses JSX when creating Components
- JSX (JavaScript XML or JavaScript Syntax Extension) is a combination of JavaScript and XML (HTML) code, where we can easily create Components using XML and JavaScript code in a single file
- JSX was introduced by Facebook in React, but now JSX has been widely adopted by many other JavaScript Frameworks

## Create Project

- To create a React project, we will use Vite as the build tool.
- We can create a React project using several commands.
- To create a React project using JavaScript:

```zsh
npm create vite@latest application-name -- --template react
```

- To create a React project using TypeScript:

```zsh
npm create vite@latest application-name -- --template react-ts
```

[](https://vite.dev/guide#scaffolding-your-first-vite-project)

## Start Project

- To start the project, we can use the following command:

```zsh
npm run dev
```

### Component

- Usually, components are created in a single JSX file with a name corresponding to the component name.
  For example, if we want to create a component named HelloWorld,
  we can create a file called HelloWorld.jsx.
  Next, we need to create a default function with the component name, which is HelloWorld.
  The return value of this function is the UI element that will be displayed.

- React Components support all HTML and SVG elements.
- So we don't need to worry when creating Components, because all elements are definitely supported.
  [https://react.dev/reference/react-dom/components](https://react.dev/reference/react-dom/components)

#### Displaying Component

- To display a Component, an instance of React Root is required.

```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
```

- We can create React Root using the createRoot(element) method.
  [https://react.dev/reference/react-dom/client/createRoot](https://react.dev/reference/react-dom/client/createRoot)
- Next, to display a Component in React Root, we can use the render method. (component)
- To help troubleshoot issues during development, React provides the StrictMode component. We can use StrictMode to display components in the Root
  [https://react.dev/reference/react/StrictMode](https://react.dev/reference/react/StrictMode)

#### Multiple Component

- Previously, we created one JSX file for one Component.
- Although that is good practice, it does not mean it is mandatory.
- A Component is actually just a function that returns a React Element. Therefore, if we want to create a Component, we only need to create a function that returns a React Element.

```js
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}
export default App;
```

## JSX

- Websites are built using HTML, CSS, and JavaScript. Typically, we store content in HTML, design in CSS, and application logic in JavaScript. And usually, we store them in separate files.
- But today, websites are more interactive, and often HTML content is displayed based on application logic in JavaScript.Therefore, React performs application logic and creates content in one place, JSX.

- When converting HTML code to JSX, we cannot simply copy and paste the code. JSX has stricter rules than HTML. For example, when using element tags, we must use closing tags.

```html
<!-- For example, we cannot use -->
<img src="" />
<!-- We must use closing tags when using JSX. -->
<img src="" />
```

- Some attributes in element tags are also different. We will discuss this step by step.

### JSX Rules

- Components can only return one element. If we want to return multiple elements, we must wrap them in a parent element.

```js
// with div wrapper, if need styling or layout
function Profile() {
  return (
    <div className="profile">
      <h1>Nama: Andi</h1>
      <p>Umur: 21</p>
    </div>
  );
}

// with fragment <> , if only need to wrap without additional DOM
function Profile() {
  return (
    <>
      <h1>Nama: Andi</h1>
      <p>Umur: 21</p>
    </>
  );
}
```

- All element tags must be closed.
- Attributes use camelCase. Attributes in JSX elements will be converted to JavaScript variables, so attribute names must follow the naming conventions for JavaScript variables, which means they cannot use hyphens (-).
- Due to this limitation, most attributes in JSX elements will use camelCase, for example className (not class-name).

### JSX Converter

- If we want to convert HTML to JSX, we can use the following tool:
  [https://transform.tools/html-to-jsx](https://transform.tools/html-to-jsx)

- This tool will help us convert HTML code to JSX code automatically.

### JavaScript In JSX

- We can use JavaScript expressions in JSX by using curly braces `{}`.
- For example, we can display a variable or the result of a function call directly in the JSX code.

```js
const name = "Andi";
function getName() {
  return "Budi";
}

function App() {
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Your name is {getName()}</p>
    </div>
  );
}
```

- but it only can use for 2 location, for text and attributes value
- sometimes we can see double {} like {{}} , this is because the first {} is for JavaScript expression and the second {} is for object literal. For example, when we want to pass an object as a prop to a component.

```js
function App() {
  return (
    // <div style={{ color: "red", backgroundColor: "black" }}>  so its like {{}}
      <h1>Hello World</h1>
    </div>
  );
}
```

## Props (Properties)

- React Components use Props to communicate.
  Parent Components can send information to Child Components using Props.
  Props are similar to attributes in HTML Elements, but we can send JavaScript values such as objects, arrays, functions, or others

- To add Props to a Component, we only need to add an object parameter to the function in the Component
  The Props parameter is a JavaScript Object, so we can access the attribute details sent from the parent via Props

  ```js
  function HelloWorld(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  ```

## Nested Component

- JSX supports the creation of Nested Components.
- This allows us to create Components that can dynamically add other Components inside them.
- In order for a component to have other Components inside it, we can use the children attribute in Props.
- For example, let's say we are going to create a Component called Container, and inside it we can contain other Components.

```js
// Container.jsx
export default function Container({ children }) {
  return (
    <div>
      <h1>Welcome to React</h1>
      {children}
      <footer>
        <p>2025</p>
      </footer>
    </div>
  );
}

// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./Container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
    </Container>
  </StrictMode>
);
```

## Style in jsx

- So far, we have only discussed HTML and JavaScript in JSX, but what about CSS?
- CSS itself is not part of JSX. If we want to create CSS styles, we need to create them in a CSS file or directly in the style attribute using double curly brackets, as demonstrated earlier.
- But now we will try it in a CSS file.
- Using Style in JSX, we don't use the class attribute, but rather className.
  [https://react.dev/reference/react-dom/components/common#applying-css-styles](https://react.dev/reference/react-dom/components/common#applying-css-styles)

```css
.paragrafh {
  color: #e7e7e7ff;
  background-color: #67a6a7ff;
}
```

```js
import "./HelloWorld.css";

function Paragrafh(p) {
  return <p className="paragrafh">{p}</p>;
}
```

## Conditional

### IF Else

- When we create web pages, we often display different views under certain conditions. This can also be done in JSX.
- We can add conditions using JavaScript and return different components based on the desired conditions.
- For example, we will create a TodoList page, and if the Todo is difficult to complete, we will cross out the text element.

```js
export default function Todo({ text, isCompleted }) {
  if (isCompleted) {
    return (
      <div>
        <h1>
          <del>{text}</del>
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}
```

### Null Component

- In certain cases, there may be situations where we want to return a Component, or do not want to return any Component
- We can return null to indicate that we are not returning any Component

```js
export default function Todo({ text, isCompleted, isDeleted }) {
  if (isDeleted) {
    return null;
  } else if (isCompleted) {
    return (
      <div>
        <h1>
          <del>{text}</del>
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}
```

### Tenary & Logical AND

Sometimes in simpler cases, we can use the JavaScript Ternary Operator in JSX. In some simpler cases, JSX often uses Logical AND in JavaScript.

For example, if the condition is met, it will display; if not, it will not display.

```js

// Tenary
export default function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return <li>{isCompleted ? <del>{text}</del> : text}</li>;
  }
}

// Logical AND
export default function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {text} {isCompleted && "✅"}
      </li>
    );
  }
}
```

## Collection Component

We will often display the same Component multiple times according to the data collection. JSX itself does not have a looping feature.

To display multiple Components, just like Conditional, we will use JavaScript.

We can use JavaScript Array to convert Array data into Components, for example, using the map() method on the Array.

For example, now we will try to convert the TodoList data that we previously created into an array.

```js
import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      text: "Learn React",
      isCompleted: false,
    },
  ];

  // with {} and return
  const todos = data.map((todo) => {
    return <Todo {...todo} />;
  });

  // or without {} , return and ;
  const todos = data.map((todo) => <Todo {...todo} />);

  return <ul>{todos}</ul>;
}
```

### Component Key

If we look at the Text Editor, we may see a warning message: “Missing key prop for element in iterator.”

When creating a Collection Component, each Component requires an id (unique, string or number) using the key attribute.

Why do we need a Component Key? This is so that React can recognize the Component when it changes, such as when its position is changed, deleted, or added to the Collection.

Typically, the Component Key is taken from the data, making it more consistent.

```js
import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 1,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      id: 4,
      text: "Learn React",
      isCompleted: false,
    },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
```

## Pure Component

React assumes that every Component we create is a Pure Function. This means that the React Component we create must always return the same JSX with the same input.

Although we can actually create a React Component that is not Pure, it is highly discouraged, because each call to the Component with the same input can produce inconsistent values.

We will try to create an example of a React Component that is not Pure.

```js

```

### Pure Function

In programming, we are familiar with the term Pure Function.

[https://en.wikipedia.org/wiki/Pure_function](https://en.wikipedia.org/wiki/Pure_function)

A function is called a Pure Function if it meets the following two criteria:

1. The function will return the same value for the same parameter values.

2. The function has no side effects; there are no changes to non-local variables (variables outside the function).

```js
// Pure function
export function double(num) {
  return num * 2; // if num 2 = 4
}

// Not Pure
let count = 0;
export function increment() {
  count++;
  return count; // it will be change like 1,2,3,dst
}
```
