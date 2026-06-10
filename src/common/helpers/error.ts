class ApiError extends Error {
  public status: number;

  constructor(message: string | undefined, status: number) {
    super(message);
    this.status = status;
  }
}

class BadRequestError extends ApiError {
  constructor(message: string | undefined) {
    super(message, 400);
  }
}

class NotFoundError extends ApiError {
  constructor(message: string | undefined) {
    super(message, 404);
  }
}

class ConflictError extends ApiError {
  constructor(message: string | undefined) {
    super(message, 409);
  }
}

export { BadRequestError, NotFoundError, ConflictError };
