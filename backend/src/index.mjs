import dotenv from 'dotenv';
import envPath from './config.mjs';
import express from 'express';
import usersRoutes from './routes/usersRoutes.mjs';

dotenv.config({ path: envPath });

const PORT = process.env.PORT;

const app = express();

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
