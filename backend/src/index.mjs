import dotenv from 'dotenv';
import envPath from './config.mjs';
import express from 'express';
import usersRoutes from './routes/usersRoutes.mjs';
import imagesRoutes from './routes/imagesRoutes.mjs';

dotenv.config({ path: envPath });

const PORT = process.env.PORT;

const app = express();

app.use('/users', usersRoutes);
app.use('/images', imagesRoutes);

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
