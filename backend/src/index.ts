import dotenv from 'dotenv';
import app from './app';

dotenv.config();
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
