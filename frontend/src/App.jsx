import React, { useState, useEffect } from "react";
import "./App.css";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [totalBooks, setTotalBooks] = useState(0);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/books", {
        params: {
          ...filters,
          page,
          page_size: pageSize,
          sort_by: sortBy,
          sort_order: sortOrder,
        },
      });
      setBooks(response.data.results);
      setTotalBooks(response.data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [filters, page, pageSize, sortBy, sortOrder]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    //setPage(1); // Reset page when filters change
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setPageSize(newSize);
    setPage(1); // Reset to page 1
  };

  const handleSortChange = (newSortBy, newSortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    setPage(1);
  };

  const totalPages = Math.ceil(totalBooks / pageSize);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Digital Library</h1>

        <SearchBar filters={filters} onFilterChange={handleFilterChange} />

        <div className="flex gap-6 items-center my-6">
          <div>
            <label className="mr-2 font-medium">Page Size:</label>
            <select
              value={pageSize}
              onChange={handlePageSizeChange}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mr-2 font-medium">Page:</label>
            <select
              value={page}
              onChange={(e) => handlePageChange(parseInt(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="text-blue-500 font-semibold text-center">
            Loading books...
          </p>
        ) : error ? (
          <p className="text-red-500 font-semibold text-center">
            Error: {error}
          </p>
        ) : (
          <BookList
            books={books}
            totalBooks={totalBooks}
            page={page}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
            onSortChange={handleSortChange}
          />
        )}
      </div>
    </div>
  );
};

export default App;
