import { config } from 'dotenv';
import pg from 'pg';

const { Pool } = pg;
config({ path: '../.env' });

const pool = new Pool();

export default pool;
