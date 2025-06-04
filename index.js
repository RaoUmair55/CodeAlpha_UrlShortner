import express from 'express';
import connectDB from './db/db.js';
import urlRoutes from './routes/urlRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

connectDB().then(() => {
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection failed:', err);
});

app.use('/api/v1/shorten', urlRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});