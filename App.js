import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Check NJ");
const jsxHeading = //element
  (
    <>
      <h1 id="heading" style={{ color: "red" }}>
        this is jsx heading
      </h1>
      <h2 id="heading2"> Check JSX </h2>
    </>
  );

const spanElemeent = (
  <span style={{ backgroundColor: "green", color: "white" }}>
    {" "}
    {jsxHeading}
    This is span element
  </span>
);
const element = (
  <>
    <h2 style={{ backgroundColor: "pink" }}> I am an element</h2> {spanElemeent}
  </>
);
const Title = () => ( // functional component
  // component
  // console.log('called?')
  <>
    {element}
    {console.log("hi")}
    {/* <HeadingComponent /> */}
    <h1 className="yitle" style={{ color: "rgba(27, 17, 170, 1)" }}>
      Title
    </h1>
  </>
);

// Component Composition
const HeadingComponent = () => (
  // component
  <>
    <Title />
    <h1 style={{ color: "green" }}> Functional Component</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("div2"));
// root.render(jsxHeading);
root.render(<HeadingComponent />);
