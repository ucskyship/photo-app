import React from "react";
import {useState, useRef, useEffect} from 'react'
import './Search.css'

const Search = ({ getSearchTerm }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const searchSubmitHandler = (event) => {
    event.preventDefault();
    if (input.trim() !== ""){
        getSearchTerm(input);
    }
    setInput("");
  };

  useEffect(()=> {
    console.log(inputRef);
    inputRef.current.focus();
  })

  return (
    <form onSubmit={searchSubmitHandler} className="search">
      <input
        type="search"
        placeholder=" search..."
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
