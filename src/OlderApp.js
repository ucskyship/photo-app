import "./App.css";
import { useState, useEffect } from "react";
import DisplayCoords from "./DisplayCoords.js";
import Timer from "./Timer";

function App() {
  const [count, setCount] = useState(0);
  const [coord, setCoord] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    setCoord({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    // return () => {

    // }
  });

  return (
    <div className="App">
      <h1>{/* count: {count} */}</h1>

      <DisplayCoords />

      <h3>
        <Timer />
      </h3>

      <button className="add" onClick={() => setCount(count + 1)}>
        count
      </button>
    </div>
  );
}

export default App;
