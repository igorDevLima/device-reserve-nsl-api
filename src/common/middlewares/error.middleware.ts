import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  const statusCode = err.status || 500;
  const errorMessage = err.status
    ? err.message
    : "A Internal server error occurred! Try again later";
  process.env.NODE_ENV === "development" && console.error(err);
  return res.status(statusCode).json({ error: errorMessage });
};
