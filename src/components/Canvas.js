import React from "react";

const Canvas = () => {
  const canvasRef = React.useRef(null);
  const canvasObj = canvasRef.current;
  const ctx = canvasObj.getContext("2d");
  const [coordindates, setCoordinates] = React.useState([]);

  return (
    <main className="App-main">
      <canvas />
    </main>
  );
};

export default Canvas;
