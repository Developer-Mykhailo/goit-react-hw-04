//App.jsx
import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchDataAPI } from "./services/unsplashAPI";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { ClipLoader } from "react-spinners";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //handlers
  const handleQueryChange = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query.trim()) return;

    const fetchPhotos = async () => {
      try {
        setIsLoading(true);

        const { results } = await fetchDataAPI(query);
        setPhotos(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [query]);

  //JSX
  return (
    <Container>
      <SearchBar onSubmit={handleQueryChange} />

      <ImageGallery photos={photos} />
      {isLoading && <ClipLoader className="loader" />}

      <LoadMoreBtn />
    </Container>
  );
}

export default App;
