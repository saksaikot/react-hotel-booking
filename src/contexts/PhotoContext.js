import React, { useContext, useState, useEffect } from "react";
import { useList } from "react-firebase-hooks/database";

import { db } from "../services/firebase/firebase";
const PhotoContext = React.createContext();

export function usePhoto() {
  return useContext(PhotoContext);
}

export default function PhotoProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [dbFeedbacks] = useList(db.feedbacks.getAll());
  useEffect(() => {
    const dbFeedbackArray = [];
    dbFeedbacks.map((v) => dbFeedbackArray.push({ key: v.key, ...v.val() }));
    setFeedbacks([...dbFeedbackArray]);
    // console.log(feedbacks, "feedbacks");
  }, [dbFeedbacks]);

  const value = { feedbacks };
  return (
    <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>
  );
}
