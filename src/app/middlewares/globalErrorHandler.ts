import { ErrorRequestHandler } from "express";

export const GlobalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  const { statusCode = 500, message = "Something went wrong", stack } = err;

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? stack : undefined,
  });
};
