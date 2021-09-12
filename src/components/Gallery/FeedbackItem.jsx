import React from "react";
import { Card } from "react-bootstrap";
export default function FeedbackItem({ feedback }) {
  return (
    <Card style={{ width: "18rem" }} className="w-100 m-2">
      <Card.Body>
        <Card.Title>{feedback.name}</Card.Title>
        <Card.Text>{feedback.feedback}</Card.Text>
      </Card.Body>
    </Card>
  );
}
