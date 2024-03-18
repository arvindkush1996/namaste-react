//import React from "react";
//import ReactDOM from "react-dom";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from child1"),
    React.createElement("h1", {}, "Hello from child2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from child3"),
    React.createElement("h1", {}, "Hello from child4"),
  ]),
]);

//const heading = React.createElement("h1", {}, "Hello1 from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
