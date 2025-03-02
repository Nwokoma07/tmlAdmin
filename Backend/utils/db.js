import * as pg from 'pg'
import dotenv from 'dotenv'

dotenv.config();
const { Client } = pg.default;


const db =  new Client ({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect(function(err) {
    if(err) {
        console.log('Error connecting to PostgreSQL database');
    } else {
        console.log('Connected to PostgreSQL database');
    }
});

export default db;