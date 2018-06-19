import mongoose, {Schema} from 'mongoose';

var schema = Schema({
  title: {
      type:String,
      required: true
  },
  author: String,
  owner: Schema.Types.ObjectId
}); 

var Book = mongoose.model('Book', schema);

export default Book;