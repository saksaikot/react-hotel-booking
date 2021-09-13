import React from "react";
import { useRoom } from "../../contexts/RoomContext";
import { categories } from "../../services/rooms/rooms";

export default function Categories() {
  const { handleFilterRoomByClass } = useRoom();
  const list = categories;
  return (
    <div className=" my-2">
      <button
        onClick={() => handleFilterRoomByClass("all")}
        type="button"
        className="btn btn-light text-capitalize mx-2"
      >
        all
      </button>
      {list.map((item) => (
        <button
          key={item.name}
          onClick={() => handleFilterRoomByClass(item.name)}
          type="button"
          className="btn btn-light text-capitalize  mx-2"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
