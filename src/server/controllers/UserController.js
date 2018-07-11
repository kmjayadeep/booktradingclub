import User from '../models/User';

export const getAllUsers = () => {
  return User.find();
};

export const editUser = body => {
  const User = new User(body);
  return User.save();
};
