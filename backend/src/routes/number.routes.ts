import express from 'express';
import { numberController } from '../controllers/numberController';
import errorChecker from '../middlewares/errorChecker';

export const numberRouter = express.Router();

numberRouter.get('/number', errorChecker(numberController.getNumber));
numberRouter.post('/number', errorChecker(numberController.saveNumber));
