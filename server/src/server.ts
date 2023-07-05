import express, { NextFunction, Request, Response } from "express";
import 'reflect-metadata';
import 'express-async-errors'

import "./shared/container"
import { routes } from './routes';
import { AppErrors } from '@errors/appErrors';

const server = express();
server.use(express.json());

server.use(routes)

server.use((
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppErrors) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  };

  return res.status(500).json({
    message: `Internal Server Error - ${err.message}`
  });
});



server.listen(3333, () => {
  console.log('Server is running');
});