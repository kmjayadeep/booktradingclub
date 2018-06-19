import express from "express";
import Book from "../models/Book";
const controller = express.Router();

controller.get('/', (req, res) => {
  Book.find().then(books => {
    res.json(books);
  });
});

controller.put('/', (req, res) => {
  const book = new Book(req.body);
  book.save().then(b => {
    res.json(b);
  });
});

export default controller;
