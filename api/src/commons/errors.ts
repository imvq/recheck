import { Errors } from 'typescript-rest';
import httpStatus from 'http-status-codes';

export class ExpectationFailedError extends Errors.HttpError {
  constructor(message?: string) {
    super('EXPECTATION FAILED', message || 'Expectation failed.');
    this.statusCode = httpStatus.EXPECTATION_FAILED;
  }
}
