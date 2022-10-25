import React from "react";
import Search from "./component/Search";
import { useState, useEffect } from "react";
import { unsplash } from "./api/Unsplash";
import ImageList from "./component/ImageList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImageList] = useState([]);
  const getSearchTerm = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
      const fetchPhotos = async () => {
          const result = await unsplash.get(`/search/photos/?query=${searchTerm}`);
          console.log(result);
          setImageList(result.data.results);
      }
      fetchPhotos();
  }, [searchTerm]);

  useEffect(()=> {
    const fetchPhotos = async () => {
      const result = await unsplash.get(`/photos/random?count=30`);
      setImageList(result.data);
    }
    fetchPhotos();
  }, [])
  return (
    <div>
      <Search getSearchTerm={getSearchTerm} />
      <ImageList data={images}/>
    </div>
  );
};

export default App;
