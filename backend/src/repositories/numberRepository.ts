import fs from 'fs/promises';
import path from 'path';

export const numberRepository = {
  async getNumber(): Promise<string> {
    return await fs.readFile(
      path.join(__dirname, '../data', 'data.txt'),
      'utf-8'
    );
  },

  async saveNumber(number: Number): Promise<void> {
    await fs.writeFile(
      path.join(__dirname, '../data', 'data.txt'),
      number.toString()
    );
  }
};
