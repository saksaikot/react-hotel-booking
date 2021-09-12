import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../../services/firebase/firebase.js";
import { of } from "await-of";
export default function FeedbackForm({ currentUser, imageUrl }) {
  const feedbackRef = useRef();

  const handleSubmit = async () => {
    const feedback = feedbackRef.current.value;
    const feedbackData = {
      name: currentUser.displayName,
      feedback,
      uid: currentUser.uid,
      image: imageUrl,
    };
    // const [save, saveError] =
    await of(db.feedbacks.create(feedbackData));
    feedbackRef.current.value = "";
    // console.log(save, saveError);

    // console.log(feedbackData);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Please write your feedback</Form.Label>
        <Form.Control as="textarea" ref={feedbackRef} rows={3} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
