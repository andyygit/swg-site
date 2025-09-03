import dotenv from 'dotenv';
import { publicPath, envPath } from './config/paths.mjs';
import express from 'express';
import rateLimit from 'express-rate-limit';
import authRtoutes from './routes/authRoutes.mjs';
import myProfileRoutes from './routes/myProfileRoutes.mjs';
import profilesRoutes from './routes/profilesRoutes.mjs';

console.log(envPath);

dotenv.config({ path: envPath });

const PORT = process.env.PORT;
const HOST = process.env.HOST;

/**
 *
 *
 * TEMP CORS
 *
 *
 */
const app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', '*');
  res.append('Access-Control-Allow-Headers', '*');
  res.append('Access-Control-Allow-Credentials', '*');
  next();
});
/**
 *
 *
 * END TEMP CORS
 *
 *
 */

// rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes -> 1
  max: 15, // limit each IP to 100 requests per windowMs, -> 15
  message:
    'Poti face maxim 15 apeluri per minut. Incearca din nou intr-un minut.',
});
app.use(limiter);

// serve index
// app.use(express.static(publicPath));

// parse incoming json body
app.use(express.json());

// request logging
// app.use((req, res, next) => {
//   console.log(`Request with method ${req.method} made at ${req.url}`);
//   next();
// });

// routes
app.use('/auth', authRtoutes);
app.use('/my-profile', myProfileRoutes);
app.use('/profiles', profilesRoutes);

/**
 * @todo
 */
// app.use('/search', searchRoutes); // quicksearch, usersearch, advancedsearch
// app.use('/favourites', favouritesRoutes); // useri favoriti                                --move to /profiles route & controller
// app.use('/online', onlineRoutes); // useri online                                          --move to /profiles route & controller
// app.use('/inbox', inboxRoutes); // mesaje, view messages, read message, reply              --move send message + add to favorites to /profiles
// app.use('/friends', friendsRoutes);
// app.use('/premium', premiumRoutes);
/**
 * @end_todo
 */

// redirects
app.use((req, res) => {
  res.status(404).json({ message: '404 Not found!' });
});

// errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message =
    process.env.NODE_ENV === 'production'
      ? 'Internal Server Error'
      : err.message;

  res.status(status).json({
    error: {
      message,
      status,
      timestamp: new Date().toISOString(),
    },
  });

  console.error(`[${new Date().toISOString()}] ${err.stack}`);
});

app.listen(PORT, HOST, () => {
  console.log(`listenting on port ${PORT}`);
});
