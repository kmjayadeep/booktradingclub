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

export const requestBook = async(bookId, userId) => {
  let book = await Book.findOne({
    _id: bookId
  })
  if (!book) {
    throw new Error("Invalid Book");
  }
  if (book.status != 'AVAILABLE') {
    throw new Error("Unavailable Book");
  }
  const existingReq = book.requests.find(request => request.user.toString() == userId);
  if (existingReq)
    return book;
  book.requests.push({
    user: userId
  })
  return await book.save();
}