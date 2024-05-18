import { config } from 'dotenv';
import pg from 'pg';

const { Pool } = pg;
config({ path: '../.env' });

const pool = new Pool();

console.log('Database configuration:', {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

export default pool;
