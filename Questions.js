import React from "react";
import { createRoot } from "react-dom/client";

const elemets = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child1" }, [
    React.createElement("h1", { key: "heading1" }, "Heading 1"),
    React.createElement("h2", { key: "heading2" }, "Heading 2"),
  ]),
  React.createElement("div", { key: "child2" }, [
    React.createElement("h1", { key: "heading3" }, "Heading 3"),
    React.createElement("h2", { key: "heading4" }, "Heading 4"),
  ]),
]);

const root = createRoot(document.getElementById("root"));
root.render(elemets);
