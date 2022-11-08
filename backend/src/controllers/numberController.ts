import { numberRepository } from '../repositories/numberRepository';
import { Request, Response } from 'express';

export const numberController = {
  async getNumber(_req: Request, res: Response) {
    try {
      const num = await numberRepository.getNumber();
      res.status(200).send(num);
    } catch (error) {
      console.log(error);
    }
  },

  async saveNumber(req: Request, res: Response) {
    const { number } = req.body;

    if (!number || isNaN(number)) {
      return res.status(400).send('error');
    }

    try {
      await numberRepository.saveNumber(number);
      res.status(200).send();
    } catch (error) {
      console.log(error);
    }
  }
};
