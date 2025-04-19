import { ErrorRequestHandler } from "express";

export const GlobalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  console.error("Error caught by GlobalErrorHandler:", err);

  const statusCode = err?.statusCode || 500;
  const message = err?.message || "Something went wrong";
  const stack = err?.stack;

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? stack : undefined,
  });
};
