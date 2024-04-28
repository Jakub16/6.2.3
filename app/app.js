const express = require('express');
const app = express();

const host = process.env.DB_HOST || 'postgres';
const port = process.env.DB_PORT || '5432';

const { Pool } = require('pg');
const pool = new Pool({
    user: 'dbuser',
    host: host,
    database: 'project-db',
    password: 'test',
    port: parseInt(port),
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
});

app.get('/transactions', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM transactions');
        res.send(result.rows);
    }
    catch(error) {
        res.send(error);
    }
});

app.get('/transaction/:n', async(req, res) => {
    try {
        const result = await pool.query(`SELECT transaction_id, transaction_value FROM (SELECT *, ROW_NUMBER() OVER () AS row_num FROM transactions) AS numbered_rows WHERE row_num = ${req.params.n};`);
        res.send(result.rows[0]);
    }
    catch(error) {
        res.send(error);
    }
});

app.get('/transactions/averageValue', async(req, res) => {
    try {
        const result = await pool.query('SELECT AVG(transaction_value) FROM transactions')
        res.send(result.rows[0]);
    } catch (error) {
        res.send(error);
    }
})