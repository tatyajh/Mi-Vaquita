import express from 'express';
import cors from 'cors';
import groupRoutes from './routes/index.js'; 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', groupRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
