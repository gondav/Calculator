import { numberRepository } from '../repositories/numberRepository';
import { NextFunction, Request, Response } from 'express';
import { badRequestError } from '../services/errorCreatorService';

export const numberController = {
  async getNumber(_req: Request, res: Response) {
    try {
      const num = await numberRepository.getNumber();
      res.status(200).send(num);
    } catch (error) {
      console.log(error);
    }
  },

  async saveNumber(req: Request, res: Response, next: NextFunction) {
    const { number } = req.body;

    if (!number || isNaN(Number(number))) {
      return next(badRequestError('Please enter the number you want to save'));
    }

    try {
      await numberRepository.saveNumber(number);
      res.status(200).send();
    } catch (error) {
      console.log(error);
    }
  }
};
