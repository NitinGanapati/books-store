// test/book.test.js
const chai = require("chai");
const request = require("supertest");
const app = require("../server"); // Make sure server.js exports app

const expect = chai.expect;

describe("Book API Tests", function () {
  this.timeout(10000); // In case DB operations take time

  // 1. Test GET all books with no filters
  it("should return books with default pagination", async function () {
    const res = await request(app).get("/api/books");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("results").that.is.an("array");
  });

  // 2. Test GET books with filters
  it("should return books filtered by title", async function () {
    const res = await request(app).get("/api/books?title=Book Title");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("results").that.is.an("array");
  });

  it("should return books filtered by author", async function () {
    const res = await request(app).get("/api/books?author=John Doe");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("results").that.is.an("array");
  });

  it("should return books filtered by genre", async function () {
    const res = await request(app).get("/api/books?genre=Fiction");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("results").that.is.an("array");
  });

  // 3. Test search query
  it("should return books matching search string", async function () {
    const res = await request(app).get("/api/books?search=magic");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("results").that.is.an("array");
  });

  // 4. Test pagination
  it("should return paginated results", async function () {
    const res = await request(app).get("/api/books?page=1&page_size=5");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("page", 1);
    expect(res.body).to.have.property("page_size", 5);
  });

  // 5. Test sorting
  it("should return books sorted by title in descending order", async function () {
    const res = await request(app).get(
      "/api/books?sort_by=title&sort_order=desc"
    );
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("results").that.is.an("array");
  });

  // 6. Test /filters route
  it("should return distinct titles, authors, and genres", async function () {
    const res = await request(app).get("/api/books/filters");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.all.keys("titles", "authors", "genres");
    expect(res.body.titles).to.be.an("array");
    expect(res.body.authors).to.be.an("array");
    expect(res.body.genres).to.be.an("array");
  });
});
