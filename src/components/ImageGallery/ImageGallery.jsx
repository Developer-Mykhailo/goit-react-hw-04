//ImageGallery.jsx
import s from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={s.list}>
      {photos.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard data={{ urls, alt_description }} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
