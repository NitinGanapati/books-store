import React from "react";

const BookList = ({
  books,
  totalBooks,
  page,
  pageSize,
  onPageChange,
  onSortChange,
}) => {
  const totalPages = Math.ceil(totalBooks / pageSize);

  const handleSort = (e) => {
    const [sortField, sortOrder] = e.target.value.split("_");
    onSortChange(sortField, sortOrder);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-xl transition-colors duration-300">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-blue-800">
        Available Books
      </h2>
      <p className="mb-7 text-center text-gray-700 text-lg">
        Showing {books.length} of {totalBooks} books
      </p>

      <div className="mb-8 flex justify-center items-center">
        <label htmlFor="sortSelect" className="mr-3 font-medium text-gray-700">
          Sort By:
        </label>
        <select
          id="sortSelect"
          onChange={handleSort}
          className="p-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        >
          <option value="">-- Select --</option>
          <option value="title_asc">Title (A-Z)</option>
          <option value="title_desc">Title (Z-A)</option>
          <option value="author_asc">Author (A-Z)</option>
          <option value="author_desc">Author (Z-A)</option>
          <option value="publishedYear_asc">
            Published Year (Oldest First)
          </option>
          <option value="publishedYear_desc">
            Published Year (Newest First)
          </option>
        </select>
      </div>

      {books.length === 0 ? (
        <p className="text-center text-red-500 text-xl py-10">
          No books were found matching your criteria.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-xl rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ease-in-out border border-yellow-200"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-900 leading-tight">
                {book.title}
              </h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold text-blue-700">Author:</span>{" "}
                {book.author}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold text-blue-700">Genre:</span>{" "}
                {book.genre}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-blue-700">
                  Published Year:
                </span>{" "}
                {book.publishedYear}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 flex justify-center items-center space-x-4">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-black font-semibold rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Previous
        </button>
        <span className="font-extrabold text-xl text-green-700 px-4 py-2 rounded-lg bg-green-100 shadow-inner">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages || totalPages === 0}
          onClick={() => onPageChange(page + 1)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-black font-semibold rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
