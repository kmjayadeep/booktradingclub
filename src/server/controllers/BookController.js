import Book from "../models/Book";

exports.getAllBooks = ()=>{
    return Book.find();
}

exports.addBook = (body,owner)=>{
    const {title,author} = body;
    const book = new Book({
        title,
        author,
        owner
    });
    return book.save();
}

exports.deleteBook = (bookId)=>{
    return Book.deleteOne({
        _id: bookId
    }).then(result=>{
        if(result.ok)
            return true;
    })
}