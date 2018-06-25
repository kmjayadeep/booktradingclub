import User from "../models/User";

exports.getAllUsers = () => {
  return User.find();
};

exports.editUser = (body) => {
  const User = new User(body);
  return User.save();
};
