import React from "react";
import "../component/ImageList.css";

const ImageList = ({ data }) => {
  return (
    <div className="imageGallery">
      {data.map((img) => (
        // return (
          <div>
            <img 
            key={img.id}
            src={img.urls.regular} 
            alt={img.alt_description}
            />
          </div>
        // );
      ))}
    </div>
  );
};

export default ImageList;
