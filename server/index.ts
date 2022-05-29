import 'dotenv/config';
import express, { Express, Request, Response, NextFunction } from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import helmet from 'helmet';
import { bodyParserGraphQL } from 'body-parser-graphql';
import schema from './api/schema';

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
app.use(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql:
      process.env.NODE_ENV ===
      /* istanbul ignore next */ ('development' || 'staging'),
  }))
);

// helmet must be used after graphqlHTTP or else graphiql will not load
app.use(helmet());
app.use(bodyParserGraphQL());
app.get('/', serverOnMessage);

export const port = process.env.PORT;

export default app;
