import React from "react";

// Inside functional components do not use this
const ImageList = (props) => {
  // Take props.images array passed by parent element App
  // Use helper function content to map array into new
  // array.
  // map() iterates through array and runs
  // callback function to every array item and returns
  // a new array without modifying the original
  // Content creates new array with <img> elements where
  // src is set to image object url property returned from
  // Unsplash API.
  // Image objects properties are destructured with
  // { description, id, urls } so no need to type
  // image.id etc.
  const content = props.images.map(({ description, id, urls }) => {
    // Always include key property to root tag when
    // creating and rendering lists.
    // This enables React to check existing content
    // and only render new content for better performance.
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{content}</div>;
};

export default ImageList;
