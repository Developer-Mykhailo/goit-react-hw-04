//ImageGallery.jsx
import s from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  console.log(photos);
  // console.log(photos.id);

  return (
    <ul className={s.list}>
      {photos.map(({ id, urls, alt_description }) => (
        <li key={id}>
          <ImageCard data={{ urls, alt_description }} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
