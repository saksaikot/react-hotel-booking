import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import homePageImage from "../assets/images/webp/defaultBcg.webp";

import routePaths from "./routerPaths";
export default function Home() {
  return (
    <Card className="w-100 m-0 p-0">
      <Card.Img src={homePageImage} alt="Card image" />
      <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
        <div>
          <Card.Title>Welcome to R Resort</Card.Title>
          <Card.Text>
            <Link to={routePaths.room}>Visit Rooms</Link>
          </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}
