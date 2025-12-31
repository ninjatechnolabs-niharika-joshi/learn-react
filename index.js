import React from "react";
import { createRoot } from "react-dom/client";
const parent = React.createElement("div", { id: "div1" }, [
  React.createElement(
    "h1",
    { key: "head1", id: "head1", color: "pink" },
    "This is Check"
  ),
  React.createElement("h2", { key: "had2", id: "head2" }, "nj2"),
]);

const root = createRoot(document.getElementById("root"));
root.render(parent);
