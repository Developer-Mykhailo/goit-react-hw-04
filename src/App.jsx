//App.jsx
import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchDataAPI } from "./services/unsplashAPI";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  //handlers
  const handleQueryChange = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    if (!query.trim()) return;

    const fetchPhotos = async () => {
      try {
        const { results } = await fetchDataAPI(query);
        setPhotos(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, [query]);

  //JSX
  return (
    <Container>
      <SearchBar onSubmit={handleQueryChange} />

      <ImageGallery photos={photos} />
    </Container>
  );
}

export default App;
