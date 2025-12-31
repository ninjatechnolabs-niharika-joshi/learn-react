import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste NJ");

const root = ReactDOM.createRoot(document.getElementById("div2"));
root.render(heading);
