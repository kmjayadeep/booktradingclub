import ErrorCodes from './errorCodes';

export default error => {
  switch (error.name) {
    case 'MongoError':
      if (error.code == 11000)
        return { code: ErrorCodes.DUPLICATE_KEY, data: 'email' };
      break;
    case 'ValidationError':
      //formatting only first error
      for (let [field, errorObj] of Object.entries(error.errors)) {
        if (errorObj.properties.type == 'required')
          return {
            code: ErrorCodes.REQUIRED_FIELD,
            data: field
          };
      }
  }
  return { code: ErrorCodes.UNKNOWN };
};
