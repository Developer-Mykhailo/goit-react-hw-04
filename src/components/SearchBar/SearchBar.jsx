import s from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <header className={s.header}>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <CiSearch className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
