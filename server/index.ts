import express, { Request, Response, NextFunction } from 'express'

const app = express();
const serverOnMessage = (req: Request, res: Response, next: NextFunction) => {
    res.status(200);
    res.send('Welcome to The Synaxis Server.');
}

app.get('/', serverOnMessage);

export const port = process.env.PORT || 9999

export default app;