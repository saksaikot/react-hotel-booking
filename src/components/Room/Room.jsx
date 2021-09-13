import React from "react";
import { useRoom } from "../../contexts/RoomContext";

import Filters from "./Filters";
import Item from "./Item";
import { db } from "../../services/firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function Room() {
  const { rooms, startDate, updateAlreadyBooked } = useRoom();
  const { currentUser } = useAuth();

  const onlyDate = (date) =>
    new Date(date.toJSON().slice(0, 10).replace(/-/g, "/")).getTime();
  const handleBookThisRoom = (e, roomId) => {
    e.preventDefault();
    const { uid, displayName } = currentUser;
    const requested = new Date().getTime();
    const date = onlyDate(startDate);
    const bookingData = { date, roomId, uid, displayName, requested };
    db.bookings.create(bookingData);
    updateAlreadyBooked(roomId);
  };
  return (
    <>
      <Filters />
      <div className="d-flex flex-wrap justify-content-center">
        {rooms &&
          rooms.map((room) => (
            <Item key={room.fields.id} {...{ handleBookThisRoom, room }} />
          ))}
      </div>
    </>
  );
}
