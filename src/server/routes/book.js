import express from "express";
import { getAllBooks, addBook, deleteBook, getBookByUser, requestBook, approveRequest, getBookById, resetBook } from "../controllers/BookController";
import { requiresAuth } from '../middlewares/auth';
const router = express.Router();

router.get("/", async (req, res) => {
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

router.get("/user/:userId", async (req, res) => {
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

router.get("/my", requiresAuth, async (req, res) => {
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

router.get("/request/:bookId", requiresAuth, async (req, res) => {
  try {
    const book = await requestBook(req.params.bookId, req.user._id);
    res.json(book);
  } catch (error) {
    const message = error.message ? error.message : "Unable to request Book"
    res.status(400).json({
      message,
      error
    });
  }
});

router.get("/approve/:bookId/:userId", requiresAuth, async (req, res) => {
  const { bookId, userId } = req.params;
  try {
    let book = await getBookById(bookId);
    if (book.owner.toString() != req.user._id)
      throw new Error("No Permission to approve book");
    book = await approveRequest(bookId, userId);
    res.json(book);
  } catch (error) {
    const message = error.message ? error.message : "Unable to approve Book"
    res.status(400).json({
      message,
      error
    });
  }
});

router.get("/reset/:bookId", requiresAuth, async (req, res) => {
  const { bookId } = req.params;
  try {
    let book = await getBookById(bookId);
    if (book.owner.toString() != req.user._id)
      throw new Error("No Permission to reset book");
    book = await resetBook(bookId);
    res.json(book);
  } catch (error) {
    const message = error.message ? error.message : "Unable to reset Book"
    res.status(400).json({
      message,
      error
    });
  }
});

router.put("/", requiresAuth, async (req, res) => {
  const { body, user } = req;
  try {
    const book = await addBook(body, user._id);
    res.json(book);
  } catch (error) {
    res.status(400).json({
      message: "Unable to save Book",
      error
    });
  }
});

router.delete("/:bookId", requiresAuth, async (req, res) => {
  const { bookId } = req.params;
  const userId = req.user._id;
  try {
    const book = await getBookById(bookId);
    if (book.owner.toString() != req.user._id)
      throw new Error("No Permission to delete book");
    const result = await deleteBook(bookId);
    res.json(result);
  } catch (error) {
    const message = error.message ? error.message : "Unable to reset Book"
    res.status(400).json({
      message,
      error
    });
  }
});

export default router;