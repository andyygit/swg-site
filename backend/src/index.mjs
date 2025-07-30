import dotenv from 'dotenv';
import { publicPath, envPath } from './config.mjs';
import express from 'express';
import usersRoutes from './routes/usersRoutes.mjs';
import imagesRoutes from './routes/imagesRoutes.mjs';

dotenv.config({ path: envPath });

const PORT = process.env.PORT;

const app = express();

// serve index
app.use(express.static(publicPath));

// parse incoming json body
app.use(express.json());

// request logging
app.use((req, res, next) => {
  console.log(`Request with method ${req.method} made at ${req.url}`);
  next();
});

// routes
app.use('/users', usersRoutes);
app.use('/images', imagesRoutes);

// redirects
app.use((req, res) => {
  res.status(404).send('<h3>404 Not found!</h3>');
});

// errors
app.use((err, req, res, next) => {
  res.status(err.status).json(err); // send back a friendly message to the client
  console.error(err.stack); // log the error to the STDERR
});

app.listen(PORT, () => {
  console.log(`listenting on port ${PORT}`);
});
