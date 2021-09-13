import React, { useState } from "react";
import { useRoom } from "../../contexts/RoomContext";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateFilter() {
  const { currentUser } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const LoginToUse = (
    <p>
      Please <Link to="/login">login</Link> or <Link to="/signup">signup</Link>
      to use book room feature
    </p>
  );
  const Filter = (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
  return currentUser ? Filter : LoginToUse;
}
