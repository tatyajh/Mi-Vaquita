import Joi from 'joi';

export const validateFriend = (friend) => {
  const schema = Joi.object({
    userId: Joi.number().required(),
    friendUserId: Joi.number().required(),
  });

  return schema.validate(friend);
};

export class ConflictException extends Error {
  constructor(message) {
    super(message);
    this.name = "ConflictException";
  }
}

export class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundException";
  }
}
