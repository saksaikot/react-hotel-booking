import React from "react";

export default function Image({ url, handleShow }) {
  return (
    <div
      className="card m-2 rounded"
      style={{ width: "14rem", height: "12rem" }}
    >
      <img
        className="card-img-top gallery-image"
        src={url.preview}
        alt="Card cap"
        onClick={() => handleShow(url)}
      />
    </div>
  );
}
