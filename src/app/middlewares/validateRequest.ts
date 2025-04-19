export class ValitedError extends Error {
  public statusCode: number;
  constructor(stusCode: number, message: string, stack = "") {
    super(message);
    this.statusCode = stusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
