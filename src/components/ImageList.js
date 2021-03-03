import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

// Inside functional components do not use this
const ImageList = (props) => {
  // Take props.images array passed by parent element App
  // Use helper function content() to map array into new
  // array.
  // map() iterates through array and runs
  // callback function for every array item and returns
  // a new array without modifying the original
  // Content creates new array with <img> elements where
  // src is set to image object url property returned from
  // Unsplash API.

  const content = props.images.map((image) => {
    // Always include key property to root tag when
    // creating and rendering lists.
    // This enables React to check existing content
    // and only render new content for better performance.
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{content}</div>;
};

export default ImageList;
