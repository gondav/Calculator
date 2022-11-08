import express from 'express';
import cors from 'cors';
import { numberRouter } from './routes/number.routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', numberRouter);

export default app;
