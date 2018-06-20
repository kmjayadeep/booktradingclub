import mongoose, { Schema } from "mongoose";
import {sha512, generateSalt} from "../helpers/cryptoHelper";

var schema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  password: String,
  passwordSalt: String,
  city: String,
  address: String,
  state: String,
  contact: String, //Phone/email/Where to find you?
  google:{
    profile: Schema.Types.Mixed
  }
});


schema.pre("save", function(next) {
  let user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();
  
  const salt = generateSalt();
  user.password = sha512(user.password, salt);
  user.passwordSalt = salt;
  next();
});

schema.methods.comparePassword = function(password) {
  const user = this;
  const salt = user.passwordSalt;
  const hashedPassword = sha512(password, salt);
  return hashedPassword === user.password;
};

var User = mongoose.model("User", schema);

export default User;
