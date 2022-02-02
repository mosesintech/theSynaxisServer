import 'dotenv/config';
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { bodyParserGraphQL } from 'body-parser-graphql';

const app: Express = express();
const serverOnMessage = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(200);
  res.send('Welcome to The Synaxis Server.');
  next();
};

app.use(cors());
app.use(helmet());
app.use(bodyParserGraphQL());
app.get('/', serverOnMessage);

export const port = process.env.PORT;

export default app;
