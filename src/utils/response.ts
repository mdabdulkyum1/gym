import { Response } from 'express';

export const sendSuccessResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data: any
): Response => {
  return res.status(statusCode).json({
    success: true,
    statusCode,
    message,
    data,
  });
};
