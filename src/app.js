import express from 'express';
import cors from 'cors';
import groupRoutes from './routes/index.js'; 

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/groups', groupRoutes);

app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
