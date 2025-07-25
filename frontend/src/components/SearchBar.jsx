import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ filters, onFilterChange }) => {
  const [dropdowns, setDropdowns] = useState({
    titles: [],
    authors: [],
    genres: [],
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/books/filters"
        );
        setDropdowns({
          titles: response.data.titles,
          authors: response.data.authors,
          genres: response.data.genres,
        });
      } catch (error) {
        console.error("Error fetching filter options", error);
      }
    };

    fetchFilters();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onFilterChange({
        ...filters,
        search: searchText,
      });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  const handleChange = (e) => {
    onFilterChange({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="p-4 bg-gray-100 rounded shadow-md space-y-4"
    >
      {/* Search bar on top */}
      <input
        type="text"
        placeholder="Search by Title, Author, or Genre..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="p-2 border rounded w-full"
      />

      {/* Dropdowns in a row (stack on small screens) */}
      <div className="flex flex-wrap gap-4">
        <select
          name="title"
          value={filters.title || ""}
          onChange={handleChange}
          className="p-2 border rounded w-full sm:w-auto"
        >
          <option value="">Select Title</option>
          {dropdowns.titles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>

        <select
          name="author"
          value={filters.author || ""}
          onChange={handleChange}
          className="p-2 border rounded w-full sm:w-auto"
        >
          <option value="">Select Author</option>
          {dropdowns.authors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>

        <select
          name="genre"
          value={filters.genre || ""}
          onChange={handleChange}
          className="p-2 border rounded w-full sm:w-auto"
        >
          <option value="">Select Genre</option>
          {dropdowns.genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchBar;
