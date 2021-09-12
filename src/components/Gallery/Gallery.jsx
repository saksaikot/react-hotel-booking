import React, { useState } from "react";
import images from "../../services/photos/photos";
import Images from "./Images";
import Categories from "./Categories";
import "./gallery.css";
import ImageModal from "./ImageModal";
import { useAuth } from "../../contexts/AuthContext";

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState(images.images);
  const [category, setCategory] = useState(images.category);
  const [selectedImage, setSelectedImage] = useState(false);
  const [show, setShow] = useState(false);
  const { logout, currentUser } = useAuth();

  const handleClose = () => setSelectedImage(false);
  const handleShow = (imageUrl) => {
    setSelectedImage(imageUrl);
    // console.log(imageUrl);
  };
  const handleFilter = (name) => {
    if (name === "all") return setGalleryImages(images.images);
    setGalleryImages(images.images.filter((i) => i.category === name));
    // console.log("name", name);
  };

  return (
    <div>
      <Categories list={category} handleFilter={handleFilter} />
      <Images images={galleryImages} handleShow={handleShow} />
      <ImageModal
        {...{ handleClose, handleShow, currentUser }}
        show={selectedImage}
      />
    </div>
  );
}
