import React, { useContext, useState, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";

import { db } from "../services/firebase/firebase";

import roomData from "../services/rooms/rooms";
const RoomContext = React.createContext();

export function useRoom() {
  return useContext(RoomContext);
}

export default function RoomProvider({ children }) {
  const [rooms, setRooms] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [bookings, setBooking] = useState();
  const [alreadyBooked, setAlreadyBooked] = useState({});
  const [dbBookings] = useList(db.bookings.getAll());
  useEffect(() => {
    setRooms(roomData);
  }, []);
  useEffect(() => {
    const dbBookingArray = [];
    dbBookings.map((v) => dbBookingArray.push({ key: v.key, ...v.val() }));

    setBooking([...dbBookingArray]);
  }, [dbBookings]);

  useEffect(() => {
    const booked = {};
    db.bookings
      .getAll()
      .orderByChild("date")
      .equalTo(onlyDate(startDate))
      .once("value")
      .then((data) => {
        for (const date in data.val()) {
          booked[data.val()[date].roomId] = true;
        }
        setAlreadyBooked(booked);
      });
  }, [startDate]);
  const updateAlreadyBooked = (id) => {
    setAlreadyBooked({ ...alreadyBooked, [id]: true });
  };
  const onlyDate = (date) =>
    new Date(date.toJSON().slice(0, 10).replace(/-/g, "/")).getTime();
  const handleFilterRoomByClass = (name) => {
    if (name === "all") return setRooms(roomData);

    setRooms(roomData.filter((room) => room.fields.roomClass === name));
  };
  const value = {
    rooms,
    startDate,
    setStartDate,
    alreadyBooked,
    updateAlreadyBooked,
    handleFilterRoomByClass,
  };
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}
