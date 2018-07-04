import express from "express";
import { getAllBooks, addBook, deleteBook, getBookByUser } from "../controllers/BookController";
import { requiresAuth } from '../middlewares/auth';
const router = express.Router();

router.get("/", async(req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(400).json({
      message: "Unable to retrieve Books",
      error: err
    });
  }
});

router.get("/user/:userId", async(req, res) => {
  try {
    const books = await getBookByUser(req.params.userId);
    res.json(books);
  } catch (err) {
    res.status(400).json({
      message: "Unable to retrieve Books",
      error: err
    });
  }
});

router.get("/my", requiresAuth, async(req, res) => {
  try {
    const books = await getBookByUser(req.user._id);
    res.json(books);
  } catch (err) {
    res.status(400).json({
      message: "Unable to retrieve Books",
      error: err
    });
  }
});

router.put("/", async(req, res) => {
  const { body, user } = req;
  try {
    const book = await addBook(body, user);
    res.json(book);
  } catch (err) {
    res.status(400).json({
      message: "Unable to save Book",
      error: err
    });
  }
});

router.delete("/:bookId", async(req, res) => {
  const { bookId } = req.params;
  try {
    const result = deleteBook(bookId)
    res.json(result);
  } catch (err) {
    res.status(400).json({
      message: "Unable to delete Book",
      error: err
    });
  }
});

export default router;