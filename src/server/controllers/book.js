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
  }).catch(err=>{
    res.status(400).json({
      message: "Unable to save Book",
      error: err
    })
  })
});

export default controller;
