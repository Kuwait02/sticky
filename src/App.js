import React from "react";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const App = () => {
  const onDragEnd = (result) => {};

  return <Main />;
};

export default App;
