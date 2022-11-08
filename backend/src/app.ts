import express from 'express';
import cors from 'cors';
import { numberRouter } from './routes/number.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', numberRouter);

app.use(errorHandler);

export default app;
