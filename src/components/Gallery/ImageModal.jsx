import React from "react";
import { Button, Modal } from "react-bootstrap";
import FeedbackForm from "./FeedbackForm";
import { Link } from "react-router-dom";

import { usePhoto } from "../../contexts/PhotoContext";
import FeedbackItem from "./FeedbackItem";
export default function ImageModal({
  handleShow,
  handleClose,
  show,
  currentUser,
}) {
  const { feedbacks } = usePhoto();
  const currentFeedbacks = feedbacks.filter((f) => f.image === show.large);
  // console.log(currentFeedbacks, "currentFeedbacks");
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={Boolean(show)} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{show.category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="w-100" src={show.large} alt="Card cap" />
          {/* <p>{JSON.stringify(currentUser)}</p> */}
          {!currentUser && (
            <p>
              Please <Link to="/login">login</Link> or{" "}
              <Link to="/signup">signup</Link> to leave your feedback
            </p>
          )}
          {currentUser && (
            <>
              <p>
                Hello {currentUser.displayName}, you can leave your feedback
              </p>
              <FeedbackForm currentUser={currentUser} imageUrl={show.large} />
            </>
          )}
          <div>
            {currentFeedbacks &&
              currentFeedbacks.map((feedback) => (
                <FeedbackItem key={feedback.key} feedback={feedback} />
              ))}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
