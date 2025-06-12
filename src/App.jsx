//App.jsx
import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchDataAPI } from "./services/unsplashAPI";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { ClipLoader } from "react-spinners";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  //handlers
  const handleQueryChange = (query) => {
    setQuery(query);
    setPage(1);
    setIsEmpty(false);
    setPhotos([]);
    setError("");
  };

  useEffect(() => {
    if (!query.trim()) return;

    const fetchPhotos = async () => {
      try {
        setIsLoading(true);

        const { results, total } = await fetchDataAPI(query, page);
        setTotalResults(total);

        if (total === 0) return setIsEmpty(true);

        if (page === 1) {
          setPhotos(results);
        } else {
          setPhotos((prev) => [...prev, ...results]);
        }
        //
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [query, page]);

  //modal
  const handleOpenModal = (image) => {
    setModalImage(image);

    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  //JSX
  return (
    <Container>
      <SearchBar onSubmit={handleQueryChange} />

      <ImageGallery photos={photos} openModal={handleOpenModal} />
      {isLoading && <ClipLoader className="loader" />}

      {photos.length > 0 && !isLoading && photos.length < totalResults && (
        <LoadMoreBtn onClick={() => setPage(page + 1)} />
      )}

      {!isLoading && photos.length > 0 && photos.length >= totalResults && (
        <p className="no_more_results">No more results</p>
      )}

      {isEmpty && (
        <p style={{ textAlign: "center", fontSize: "18px", color: "333" }}>
          Sorry! Nothing found.
        </p>
      )}

      {error && <ErrorMessage error={error} />}

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
    </Container>
  );
}

export default App;
