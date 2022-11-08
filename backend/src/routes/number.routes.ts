import express from 'express';
import { numberController } from '../controllers/numberController';

export const numberRouter = express.Router();

numberRouter.get('/number', numberController.getNumber);
numberRouter.post('/number', numberController.saveNumber);
