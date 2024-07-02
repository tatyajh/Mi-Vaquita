import express from 'express';
import cors from 'cors';
import groupRoutes from './routes/groups.router.js'; 
import userRoutes from './routes/users.router.js';
import authRoutes from './routes/auth.router.js'; 
import passport from './utils/passport.config.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(passport.initialize());

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

app.use('/api/groups', groupRoutes); 
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
