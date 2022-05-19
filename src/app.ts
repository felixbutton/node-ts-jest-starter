import express, {Request, Response, NextFunction} from 'express';

// Create a new express app instance
const app: express.Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => res.send('hello world'))

export default app;


