import path from 'path';
import { Request, Response, NextFunction } from 'express';
import { createLogger, format, transports } from 'winston';

/**
 * @description Creates a logger that outputs a file and the console.
 */
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({
      filename: path.join(__dirname, '../../logs/requests.log'),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: false,
    }),
    new transports.Console()
  ],
});

/**
 * @description Middleware that logs HTTP request details (method, path, query, body)
 */
const loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const logEntry = {
    method: req.method,
    path: req.path,
    queryStringParameters: req.query,
    body: req.body
  };

  logger.info(logEntry);
  next();
};

export {
  loggerMiddleware
}