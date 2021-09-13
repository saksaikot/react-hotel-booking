import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRoom } from "../../contexts/RoomContext";
import Loading from "../Loading";

import "./room.css";
export default function Item({ room, handleBookThisRoom }) {
  const [imageShow, setImageShow] = useState({ display: "none" });
  const imageUrl = room.fields.images[0].fields.file.url;
  const { roomClass, type, price, capacity } = room.fields;
  const { alreadyBooked } = useRoom();

  const imageLoaded = () => {
    setImageShow({ display: "block" });
  };
  return (
    <div
      className="card m-2 rounded"
      style={{ width: "14rem", height: "14rem" }}
    >
      <img
        className="card-img room-image"
        src={imageUrl}
        alt="Card cap"
        style={imageShow}
        onLoad={imageLoaded}
        // onClick={() => handleShow(url)}
      />
      {imageShow.display === "none" ? <Loading /> : null}

      <div className="room__price p-1 px-3">
        <h6>{`${price}$/${capacity} `}</h6>
        {/* <p className="m-0">per night</p> */}
      </div>

      <p className="card-text m-1 p-1 text-center w-100 text-capitalize">
        {roomClass + " " + type}
      </p>
      {useAuth().currentUser && (
        <button
          className="btn btn-primary m-1 p-1 text-center w-100 text-capitalize"
          onClick={(e) => handleBookThisRoom(e, room.fields.id)}
          disabled={alreadyBooked[room.fields.id]}
        >
          book this room
        </button>
      )}
    </div>
  );
}
