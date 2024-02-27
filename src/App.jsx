import { useState } from "react";
import ToDoWrapper from "./Components/ToDoWrapper";
import ToDoForm from "./Components/ToDoForm";
import Header from "./Components/Header";
import { Divider } from "@mui/joy";
function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <ToDoForm />
      <Divider
        orientation="vertical"
        style={{ margin: "20px 0" }}
        variant="solid"
      />
      <ToDoWrapper />
    </div>
  );
}
export default App;
