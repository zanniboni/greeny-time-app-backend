import { NextFunction, Request, Response } from 'express';
import AppError from './Errors/AppError';

const CheckUserRole = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  switch (request.user.role) {
    case 'USER':
      return next();
    case 'PLUS':
      return next();
    case 'PREMIUM':
      return next();
    case 'ADMIN':
      return next();
    default:
      throw new AppError('Unauthorized page', 403);
  }
};

export default CheckUserRole;
