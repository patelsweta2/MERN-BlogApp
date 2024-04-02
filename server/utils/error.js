const errorHandler = (statusCode, message) => {
  const error = new Error(); // error constructor
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

export default errorHandler;
