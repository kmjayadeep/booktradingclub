import express from "express";
import { getAllBooks, addBook,deleteBook } from "../controllers/BookController";
const router = express.Router();

router.get("/", (req, res) => {
  getAllBooks()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.status(400).json({
        message: "Unable to retrieve Books",
        error: err
      });
    });
});

router.put("/", (req, res) => {
  const { body, user } = req;
  addBook(body, user)
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.status(400).json({
        message: "Unable to save Book",
        error: err
      });
    });
});

router.delete("/:bookId", (req, res) => {
  const {bookId} = req.params;
  deleteBook(bookId)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(400).json({
        message: "Unable to delete Book",
        error: err
      });
    });
});

export default router;
