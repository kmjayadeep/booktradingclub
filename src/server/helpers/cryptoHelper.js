import crypto from 'crypto';
const SALT_LENGTH = 16;

export const sha512 = (password, salt) => {
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return value;
};

export const genRandomString = length => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
};

export const generateSalt = () => {
  return genRandomString(SALT_LENGTH);
};
