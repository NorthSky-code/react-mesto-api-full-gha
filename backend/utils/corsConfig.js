const allowedCors = [
  'http://northsky.students.nomoreparties.co',
  'http://api.northsky.students.nomoreparties.co',
  'http://localhost:3001',
];

const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

module.exports = {
  allowedCors,
  DEFAULT_ALLOWED_METHODS
};