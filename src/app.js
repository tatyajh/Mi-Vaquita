import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import groupRoutes from './routes/groups.router.js'; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

app.use('/api/groups', groupRoutes); 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
