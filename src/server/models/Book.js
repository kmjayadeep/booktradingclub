import mongoose, { Schema } from 'mongoose';

var schema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['AVAILABLE', 'UNAVAILABLE'],
    default: 'AVAILABLE'
  },
  requests: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      requestedOn: {
        type: Date,
        default: Date.now
      }
    }
  ],
  lent: {
    to: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    on: {
      type: Date
    }
  }
});

var Book = mongoose.model('Book', schema);

export default Book;
