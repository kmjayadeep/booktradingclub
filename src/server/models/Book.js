import mongoose, { Schema } from "mongoose";

var schema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

var Book = mongoose.model("Book", schema);

export default Book;