import { createElement } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const a = createElement(
    "div",
    { id: "parent" },
    createElement("div", { id: "child" }, [
      createElement("div", { id: "grandchild" }, [
        createElement("h1", {}, "Hello from Grandchild"),
      createElement("h1", {}, "Hello React!"),
      createElement("h1", {}, "Hello React new h2!"),
      ]),
    ]),
    createElement("div", { id: "sibling" }, [
      createElement("img", { src: reactLogo }),
      createElement("p", {}, "This is a simple React application."),
    ])
  );
  console.log(a);
  return a;
}

export default App;
