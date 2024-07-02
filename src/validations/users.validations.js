import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

class ConflictException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.CONFLICT;
  }
}

class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[0-9])')).required(),
  });

  return schema.validate(user);
};


export { ConflictException, NotFoundException, validateUser };
