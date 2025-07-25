const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Set up a route to get all books with optional filters
router.get("/", async (req, res) => {
  try {
    const {
      title,
      author,
      genre,
      page = 1,
      search,
      page_size = 10, // default page size is 10
      sort_by,
      sort_order = "asc", // mentioning default sort order as ascending
    } = req.query;

    let query = {};
    /*if (title) query.title = { $regex: title, $options: 'i' }; // case-insensitive
    if (author) query.author = { $regex: author, $options: 'i' };
    if (genre) query.genre = { $regex: genre, $options: 'i' };*/

    // Im using the exact match for simplicity otherwise you can use regex for partial matches
    // If you want to use regex, uncomment the above lines and comment the below lines Thank you
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
        { genre: { $regex: search, $options: "i" } },
      ];
    } /*else {
      if (title) query.title = title;
    }*/

    if (title) query.title = title;
    if (author) query.author = author;
    if (genre) query.genre = genre;

    // Pagination

    const skip = (page - 1) * page_size;
    const limit = parseInt(page_size);

    // Sorting
    let sort = {};
    if (sort_by) {
      sort[sort_by] = sort_order === "asc" ? 1 : -1; // 1 for ascending, -1 for descending
    }

    const books = await Book.find(query).sort(sort).skip(skip).limit(limit);

    const totalBooks = await Book.countDocuments(query);
    // If no books found we will return an empty array with total count
    if (books.length === 0) {
      return res.status(200).json({
        total: totalBooks,
        page: parseInt(page),
        page_size: limit,
        sort_by: sort_by || null,
        sort_order: sort_by ? sort_order : null,
        results: [],
      });
    }
    // If books found, we will return the books with pagination and sorting info
    //As I have used page and page_size if the database contains 50 books  page_size is 10 and page is 2 means it will return 10 books from 11 to 20
    res.status(200).json({
      total: totalBooks,
      page: parseInt(page),
      page_size: limit,
      sort_by: sort_by || null,
      sort_order: sort_by ? sort_order : null,
      results: books,
    });
  } catch (error) {
    console.error("Error in book search:", error);
    res
      .status(500)
      .json({ error: "There would be server error while fetching books" });
  }
});

// Route to get distinct titles, authors, and genres
router.get("/filters", async (req, res) => {
  try {
    const titles = await Book.distinct("title");
    const authors = await Book.distinct("author");
    const genres = await Book.distinct("genre");

    res.status(200).json({
      titles,
      authors,
      genres,
    });
  } catch (error) {
    console.error("Error fetching filter data:", error);
    res.status(500).json({ error: "Server error while fetching filter data" });
  }
});

module.exports = router;
