import Book from "../models/Book";

export const getAllBooks = async() => {
  return await Book.find();
};

export const addBook = async(body, owner) => {
  const { title, author } = body;
  const book = new Book({
    title,
    author,
    owner
  });
  return await book.save();
};

export const deleteBook = async _id => {
  const result = await Book.deleteOne({ _id })
  if (result.ok) return true;
};

export const getBookByUser = async userId => {
  return await Book.find({
    owner: userId
  });
}