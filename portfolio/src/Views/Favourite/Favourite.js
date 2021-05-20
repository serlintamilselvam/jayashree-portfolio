import { Container } from 'react-bootstrap'
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import './Favourite.scss'

function Favourite() {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        event.preventDefault()
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    };

  return (
    <Container>
        <div className="per-text">
            Personal interest: <span>cooking &lt;3</span>
        </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );

}

export default Favourite