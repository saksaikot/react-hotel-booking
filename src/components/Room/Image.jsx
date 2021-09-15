import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = ({ src, alt }) => (
  <LazyLoadImage
    alt={alt}
    src={src} // use normal <img> attributes as props
  />
);

export default Image;
