import { IApiError } from '../models/IApiError';

const generalError =
  (status: number) =>
  (message: string): IApiError => {
    return {
      status,
      message
    };
  };

export const badRequestError = generalError(400);
