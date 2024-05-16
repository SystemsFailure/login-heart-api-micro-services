import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
const app: Express = express();
const port: string | 3000 = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


// Добавьте ваш роутинг здесь

export default app;