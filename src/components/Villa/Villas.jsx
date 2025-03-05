import React, { useState } from "react";
import { villas } from '../../villas';
import { Link } from 'react-router-dom';

const Villas = () => {
  const [currentImage, setCurrentImage] = useState(villas[0].image);

  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="page" id="allVillas">
      <h1>VILLA</h1>
      <p>{villas.length} Photos</p>

      <div className="gallery-container">
        {/* الصورة الرئيسية في المنتصف */}
        <MainImage currentImage={currentImage} />

        {/* الصور الجانبية على اليمين */}
        <Thumbnails villas={villas} onThumbnailClick={handleThumbnailClick} />
      </div>
    </div>
  );
};

// مكون للصورة الرئيسية
const MainImage = React.memo(({ currentImage }) => (
  <div className="main-image">
    <img src={currentImage} alt="Main Villa" className="current-image" loading="lazy" />
  </div>
));

// مكون للصور المصغرة
const Thumbnails = React.memo(({ villas, onThumbnailClick }) => (
  <div className="thumbnails-grid">
    {villas.map((villa) => (
      <div className="thumbnail-container" key={villa.id}>
        <img
          src={villa.image}
          alt={villa.name}
          className="thumbnail"
          onClick={() => onThumbnailClick(villa.image)}
          loading="lazy"  // تحسين التحميل باستخدام lazy loading
        />
      </div>
    ))}
  </div>
));

export default Villas;