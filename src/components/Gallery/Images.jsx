import React from "react";
import Image from "./Image";
export default function images({ images, handleShow }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {images.map((image) => (
        <Image key={image.preview} url={image} handleShow={handleShow} />
      ))}
    </div>
  );
}
