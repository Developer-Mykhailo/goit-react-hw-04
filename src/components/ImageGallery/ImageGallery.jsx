//ImageGallery.jsx

const ImageGallery = ({ photos }) => {
  console.log(photos);
  // console.log(photos.id);

  return (
    <ul>
      {photos.map(({ id, urls: { small }, alt_description }) => (
        <li key={id}>
          <div>
            <img src={small} alt={alt_description} loading="lazy" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
