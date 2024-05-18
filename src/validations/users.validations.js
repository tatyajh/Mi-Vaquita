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

const validateUser = (userData) => {
  const schema = Joi.object({
    name: Joi.string().trim().max(100).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string()
      .trim()
      .min(8)
      .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      .required(),
    createdAt: Joi.date().optional(),
  });

  return schema.validate(userData);
};

export { ConflictException, NotFoundException, validateUser };
