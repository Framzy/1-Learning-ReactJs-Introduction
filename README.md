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

[Documentation for vite with jsx](https://vite.dev/guide/#scaffolding-your-first-vite-project)

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
  https://react.dev/reference/react-dom/components

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
  https://react.dev/reference/react-dom/client/createRoot
- Next, to display a Component in React Root, we can use the render method. (component)
- To help troubleshoot issues during development, React provides the StrictMode component. We can use StrictMode to display components in the Root
  https://react.dev/reference/react/StrictMode

#### Multiple Component

- Previously, we created one JSX file for one Component.
- Although that is good practice, it does not mean it is mandatory.
- A Component is actually just a function that returns a React Element. Therefore, if we want to create a Component, we only need to create a function that returns a React Element.

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
