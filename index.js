import React from "react";
import ReactDOM from "react-dom";
import { MyHeader, MyForm } from "./App";
// import { DisplayData } from "./display";

function App() {
  return (
    <section className="container">
      {/* <DisplayData/> */}
      <MyHeader />
      <MyForm />
    </section>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
