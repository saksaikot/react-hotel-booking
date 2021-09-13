import React from "react";
import { useRoom } from "../../contexts/RoomContext";
import Filters from "./Filters";
import Item from "./Item";

export default function Room() {
  const { rooms } = useRoom();
  console.log(rooms, "Room.jsx");
  // const Rooms = rooms.map((room) => <Item key={room.fields.id} room={room} />);
  const handleBookThisRoom = (date, roomId) => {
    console.log(date, roomId);
  };
  return (
    <>
      <Filters />
      <div className="d-flex flex-wrap justify-content-center">
        {rooms.map((room) => (
          <Item key={room.fields.id} {...{ handleBookThisRoom, room }} />
        ))}
      </div>
    </>
  );
}
