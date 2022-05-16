import React from "react";
import Background from "./components/Background";
import Nav from "./components/Nav";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      {" "}
      <main>
        <Background /> <Nav /> <Form />
      </main>{" "}
    </>
  );
}
