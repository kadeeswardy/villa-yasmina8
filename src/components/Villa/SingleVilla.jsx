import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";

const SingleVilla = () => {
  const [showMore, setShowMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.find((villa) => villa.id === numericId);

  if (!filteredVilla) {
    return <p>Villa not found!</p>;
  }

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section id="singleVilla" className="page">
      <div className="container">
        <h3>{filteredVilla.name}</h3>

        {numericId === 1 && (
          <div className="villa-details">
            {/* 🔹 الصور بتنسيق احترافي */}
            <div className="images-container">
              <div className="main-image">
                <img src="/villa-14.JPG" alt="villa" onClick={() => openModal("/villa-14.JPG")} />
              </div>
              <div className="grid-images">
                <img src="/villa.jpg" alt="villa" onClick={() => openModal("/villa.jpg")} />
                <img src="/villa-12.JPG" alt="villa" onClick={() => openModal("/villa-12.JPG")} />
                <img src="/villa-8.JPG" alt="villa" onClick={() => openModal("/villa-8.JPG")} />
                <img src="/villa-9.JPG" alt="villa" onClick={() => openModal("/villa-9.JPG")} />
              </div>
            </div>

            {modalOpen && (
              <div className="modal" onClick={closeModal}>
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <img src={selectedImage} alt="villa" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ...existing code for other numericId cases... */}
      </div>
    </section>
  );
};

export default SingleVilla;