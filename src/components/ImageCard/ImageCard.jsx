import s from "./ImageCard.module.css";

const ImageCard = ({ data, openModal }) => {
  const {
    urls: { small, regular },
    alt_description,
  } = data;

  return (
    <div className={s.img_wrap}>
      <img
        src={small}
        alt={alt_description}
        loading="lazy"
        onClick={() => openModal({ src: regular, alt: alt_description })}
      />
    </div>
  );
};

export default ImageCard;
