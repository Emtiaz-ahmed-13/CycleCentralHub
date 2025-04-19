import { Response } from "express";
interface IResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T;
}
export const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  const { statusCode, success, message, data: responseData } = data;
  res.status(statusCode).json({
    success,
    message,
    data: responseData,
  });
};
