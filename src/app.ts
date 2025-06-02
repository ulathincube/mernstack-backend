import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import helmet from 'helmet';
import indexRouter from './routes/index';

interface CorsOptions {
  origin: [string];
}

const corsOptions: CorsOptions = {
  origin: ['https://mern-frontend-starter.netlify.app'],
};

const app = express();

app.use(cors(corsOptions));
app.use(helmet());
app.use(pino());
app.use(express.json());

app.use(indexRouter);

export default app;
