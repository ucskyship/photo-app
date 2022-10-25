import './App.css';
import {useState, useEffect} from 'react'
import DisplayCoords from "./DisplayCoords.js"
import Timer from './Timer'

function MouseMove() {

  const [count, setCount] = useState(0)
  const [coord, setCoord] = useState({x:0,y:0})

  const mouseMove = (e)=>{
    setCoord({x: e.clientX, y: e.clientY});
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    // return () => {

    // }
  });

  return (
    <div className="App">
      <h1> 
        {/* count: {count} */}
        coords: x - {coord.x}, y - {coord.y}
        </h1>

    <button className="add" onClick={()=> setCount(count+1)}>count</button>

    </div>

  );
}

export default MouseMove;
