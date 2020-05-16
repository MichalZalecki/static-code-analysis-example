import { ValidationCode } from './validation-error';
import { ValidationError } from './user';

export function isValidUser({ id }): boolean {
  if (id.length < 3 || id.length > 32) {
    throw new ValidationError({
      code: ValidationCode.ID,
      message: 'User ID must be between 3 and 32 characters.',
    });
  }
  return true;
}
