import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pasteleriaDBagenda',
  password: '3312',
  port: 5431,
});

export default pool;
