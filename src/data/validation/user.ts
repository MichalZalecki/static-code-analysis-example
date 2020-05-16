import { ValidationCode } from './validation-error';
import { isValidUser } from './isValidUser';

export class ValidationError extends Error {
  public code: ValidationCode;

  constructor(err) {
    super(err.message);

    this.code = err.code;

    Error.captureStackTrace(this, ValidationError);
  }
}

export function isValidNewUser({ id, password }): boolean {
  isValidUser({ id });

  if (password.length < 8 || password.length > 100) {
    throw new ValidationError({
      code: ValidationCode.PASSWORD,
      message: 'User password must be longer than 8 characters.',
    });
  }

  return true;
}
