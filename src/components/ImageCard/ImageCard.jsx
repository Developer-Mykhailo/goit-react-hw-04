import s from "./ImageCard.module.css";

const ImageCard = ({ data }) => {
  const {
    urls: { small },
    alt_description,
  } = data;

  return (
    <div className={s.img_wrap}>
      <img src={small} alt={alt_description} loading="lazy" />
    </div>
  );
};

export default ImageCard;
